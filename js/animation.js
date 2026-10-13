// 애니메이션 설정
let useLessMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let introTimeline = null, lineupController = null, lineupFinished = false, contactTimeline = null, lineupTitleEntrance = null, resizeTimer;
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
// SVG 전술판
function resetLineupTactics() {
  const svg = document.querySelector('#lineup .lineup-tactics-svg');
  if (!svg || !window.gsap)
    return;
  const lines = svg.querySelectorAll('.tactic-draw');
  gsap.killTweensOf(lines);
  lines.forEach(line => {
    const length = line.getTotalLength();
    line.style.strokeDasharray = length + ' ' + length;
    line.style.strokeDashoffset = length;
  });
  gsap.set(svg, { autoAlpha: 1, opacity: innerWidth <= 900 ? .27 : .60 });
}
// SVG 선 그리기 · STARTING LINEUP
function revealLineupTitle() {
  if (useLessMotion || !window.gsap || lineupFinished || $('#lineup').prop('hidden'))
    return;
  lineupTitleEntrance?.kill();
  resetLineupTactics();
  const mobile = innerWidth <= 900;
  const lines = document.querySelectorAll('.lineup-tactics-svg .route-dash');
  lineupTitleEntrance = gsap.timeline({
    defaults: { ease: 'power3.out' }, onComplete: () => {
      lineupTitleEntrance = null;
    }
  })
    .to('.lineup-tactics-svg .tactics-frame .tactic-draw', {
      strokeDashoffset: 0, duration: .52, stagger: .045, ease: 'power1.inOut'
    }, 0)
    .addLabel('fieldComplete')
    .to('.lineup-tactics-svg .tactics-movement .tactic-draw', {
      strokeDashoffset: 0, duration: .46, stagger: .07, ease: 'power1.inOut'
    }, 'fieldComplete')
    .to('.lineup-tactics-svg .tactics-marks .tactic-draw', {
      strokeDashoffset: 0, duration: .36, stagger: .025, ease: 'power1.inOut'
    }, 'fieldComplete')
    .addLabel('tacticsComplete')
    .call(() => {
      lines.forEach(line => {
        line.style.strokeDasharray = '9 11';
        line.style.strokeDashoffset = '0';
      });
    }, null, 'tacticsComplete')
    .to('.lineup-tactics-svg', { opacity: mobile ? .18 : .33, duration: .30, ease: 'power1.inOut' }, 'tacticsComplete+=.22')
    .addLabel('headline', 'tacticsComplete+=.52')
    .to('.lineup-eyebrow', { y: 0, autoAlpha: 1, duration: .55 }, 'headline')
    .to('.lineup-intro-content h2 span:first-child', { y: 0, autoAlpha: 1, duration: .78 }, 'headline+=.10')
    .to('.lineup-intro-content h2 span:last-child', { y: 0, autoAlpha: 1, duration: .78 }, 'headline+=.22')
    .to('.lineup-intro-content p', { y: 0, autoAlpha: 1, duration: .56 }, 'headline+=.40')
    .to('.lineup-scroll-hint', { y: 0, autoAlpha: 1, duration: .55 }, 'headline+=.57');
}
// SKIP 버튼 위치
function positionIntroSkipButton() {
  const stage = document.querySelector('#intro .intro-video-canvas');
  const button = document.querySelector('#intro .skip-button');
  if (!stage || !button)
    return;
  const r = stage.getBoundingClientRect();
  const width = button.offsetWidth;
  const height = button.offsetHeight;
  const margin = 10;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const x = clamp(r.left + r.width * .906, width / 2 + margin, innerWidth - width / 2 - margin);
  const y = clamp(r.top + r.height * .831, height / 2 + margin, innerHeight - height / 2 - margin);
  button.style.left = x + 'px';
  button.style.top = y + 'px';
}
window.addEventListener('resize', positionIntroSkipButton, { passive: true });
// 영상 인트로 설정
const INTRO_LOGO_AT = 7.0;
let introVideoRaf = 0, introVideoFinishing = false, introLogoShown = false;
// 인트로 영상
function stopIntroVideo() {
  cancelAnimationFrame(introVideoRaf);
  introVideoRaf = 0;
  const video = document.querySelector('.intro-video');
  if (video)
    video.pause();
}
function showIntroVideoLogo() {
  if (introLogoShown || introVideoFinishing)
    return;
  introLogoShown = true;
  introTimeline?.kill();
  introTimeline = gsap.timeline({ defaults: { ease: 'power2.out' } })
    .to('.intro-video-logo', { autoAlpha: 1, duration: .16 }, 0)
    .to('.intro-video-shade', { opacity: 1, duration: .42, ease: 'power1.out' }, 0)
    .fromTo('.sym-logo', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .8 }, .04)
    .fromTo('.intro-name>span', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .7 }, .29);
}
function finishVideoIntro() {
  if (introVideoFinishing || $('#intro').hasClass('is-complete'))
    return;
  if (!introLogoShown)
    showIntroVideoLogo();
  introVideoFinishing = true;
  cancelAnimationFrame(introVideoRaf);
  introVideoRaf = 0;
  introTimeline?.kill();
  introTimeline = gsap.timeline({ onComplete: () => closeIntro() })
    .to('#intro', { autoAlpha: 0, duration: .55, delay: .36, ease: 'power2.inOut' });
}
function watchIntroVideo() {
  const video = document.querySelector('.intro-video');
  if (!video || $('#intro').hasClass('is-complete') || introVideoFinishing)
    return;
  if (video.currentTime >= INTRO_LOGO_AT && !introLogoShown)
    showIntroVideoLogo();
  if (video.ended) {
    finishVideoIntro();
    return;
  }
  introVideoRaf = requestAnimationFrame(watchIntroVideo);
}
function closeIntro(reveal = true) {
  stopIntroVideo();
  introTimeline?.kill();
  introTimeline = null;
  $('#intro').addClass('is-complete');
  $('body').removeClass('intro-active');
  $('main').prop('inert', false);
  if (reveal)
    revealLineupTitle();
}
function playIntro() {
  if (useLessMotion || !window.gsap) {
    closeIntro();
    finishLineup();
    return;
  }
  stopIntroVideo();
  introTimeline?.kill();
  introTimeline = null;
  introVideoFinishing = false;
  introLogoShown = false;
  const video = document.querySelector('.intro-video');
  if (!video) {
    closeIntro();
    return;
  }
  $('#intro').removeClass('is-complete');
  $('body').addClass('intro-active');
  $('main').prop('inert', true);
  gsap.set('#intro', { clearProps: 'opacity,visibility' });
  gsap.set('.intro-video-logo', { autoAlpha: 0 });
  gsap.set('.intro-video-shade', { opacity: 0 });
  gsap.set('.sym-logo', { y: 20, opacity: 0 });
  gsap.set('.intro-name>span', { y: 16, opacity: 0 });
  video.muted = true;
  video.currentTime = 0;
  $('.intro-sound-toggle').attr({ 'aria-pressed': 'false', 'aria-label': '인트로 영상 소리 켜기', title: '소리 켜기' });
  positionIntroSkipButton();
  video.onended = finishVideoIntro;
  const started = video.play();
  if (started && typeof started.catch === 'function')
    started.catch(() => {
      if (!$('#intro').hasClass('is-complete') && !introVideoFinishing)
        closeIntro(true);
    });
  introVideoRaf = requestAnimationFrame(watchIntroVideo);
}
// 라인업 초기화
function destroyLineup() {
  lineupTitleEntrance?.kill();
  lineupTitleEntrance = null;
  if (lineupController) {
    lineupController.destroy();
    lineupController = null;
  }
}
// 라인업 버튼 상태
function setLineupInteractive(enabled) {
  $('.soccer-field nav').prop('inert', !enabled);
  $('.view-buttons').prop('inert', !enabled);
  $('.list-mode').prop('inert', !enabled || !$('.lineup-board').hasClass('show-list'));
  $('.formation-view').prop('inert', !enabled || $('.lineup-board').hasClass('show-list'));
  $('.lineup-controls').prop('inert', !enabled);
}
function resetPanelStyles(stage) {
  ['--lineup-panel-left', '--lineup-panel-width', '--lineup-panel-radius', '--lineup-profile-bg-opacity'].forEach(name => stage.style.removeProperty(name));
}
// ABOUT ME 사진
function positionSinglePortrait(mode = 'start') {
  const section = document.querySelector('#lineup');
  if (!section)
    return;
  const sticky = section.querySelector('.lineup-sticky');
  const media = section.querySelector('.lineup-about-media');
  const photo = section.querySelector('.lineup-about-photo');
  const desktopPortrait = section.querySelector('.desktop-layout .profile-portrait');
  const mobilePortrait = section.querySelector('.mobile-profile .profile-portrait');
  if (!sticky || !media || !photo || !desktopPortrait || !mobilePortrait)
    return;
  const desktop = innerWidth > 900;
  if (window.gsap) {
    gsap.killTweensOf(photo);
    gsap.set(photo, { clearProps: 'transform,opacity,visibility' });
  }
  if (desktop) {
    if (photo.parentElement !== sticky)
      sticky.append(photo);
    const parentRect = sticky.getBoundingClientRect();
    const target = (mode === 'final' ? desktopPortrait : media).getBoundingClientRect();
    Object.assign(photo.style, {
      left: (target.left - parentRect.left) + 'px',
      top: (target.top - parentRect.top) + 'px',
      width: target.width + 'px',
      height: target.height + 'px',
      transform: 'none',
      opacity: mode === 'final' ? '1' : '0',
      visibility: mode === 'final' ? 'visible' : 'hidden'
    });
  }
  else {
    const parent = mode === 'final' ? mobilePortrait : media;
    if (photo.parentElement !== parent)
      parent.append(photo);
    Object.assign(photo.style, {
      left: '0px', top: '0px', width: '100%', height: '100%', transform: 'none',
      opacity: mode === 'final' ? '1' : '0',
      visibility: mode === 'final' ? 'visible' : 'hidden'
    });
  }
}
// 라인업 완료
function finishLineup(preservePortrait = false) {
  const photo = document.querySelector('#lineup .lineup-about-photo');
  const sticky = document.querySelector('#lineup .lineup-sticky');
  const keepPhoto = innerWidth > 900 && photo?.parentElement === sticky &&
    (preservePortrait || lineupFinished);
  destroyLineup();
  if (preservePortrait)
    window.scrollTo(0, 0);
  lineupFinished = true;
  const section = $('#lineup'), stage = document.querySelector('#lineup .desktop-layout');
  section.addClass('lineup-ready').removeClass('lineup-panel-shrunk');
  $('.lineup-scroll-area').css('--lineup-travel', '0px');
  $('.lineup-big-title,.lineup-white-screen,.lineup-skip').hide();
  if (window.gsap)
    gsap.set('.lineup-about-copy', { clearProps: 'all' });
  resetPanelStyles(stage);
  if (!keepPhoto)
    positionSinglePortrait('final');
  if (window.gsap) {
    gsap.set(['.lineup-section .desktop-layout', '.lineup-title', '.lineup-board', '.soccer-field', '.lineup-section .desktop-layout .profile', '.lineup-card-inner'], { clearProps: 'transform,opacity,visibility' });
  }
  setLineupInteractive(true);
}
// 라인업 스크롤 GSAP
function playLineup() {
  destroyLineup();
  lineupFinished = false;
  if (useLessMotion || !window.gsap) {
    finishLineup();
    return;
  }
  const area = document.querySelector('.lineup-scroll-area'), section = document.querySelector('#lineup'), stage = section.querySelector('.desktop-layout'), profile = stage.querySelector('.profile');
  const desktop = innerWidth > 900;
  let travel = desktop ? Math.max(2700, innerHeight * 3.45) : Math.max(1600, innerHeight * 2.65);
  area.style.setProperty('--lineup-travel', travel + 'px');
  section.classList.remove('lineup-ready', 'lineup-panel-shrunk');
  setLineupInteractive(false);
  $('.lineup-big-title,.lineup-skip').show();
  $('.lineup-white-screen').hide();
  $('.lineup-skip').prop('hidden', false);
  gsap.set('.lineup-intro-content', { clearProps: 'all' });
  gsap.set('.lineup-eyebrow', { y: 22, autoAlpha: 0 });
  gsap.set('.lineup-intro-content h2 span', { y: 53, autoAlpha: 0 });
  gsap.set('.lineup-intro-content p', { y: 25, autoAlpha: 0 });
  gsap.set('.lineup-scroll-hint', { y: 18, autoAlpha: 0 });
  gsap.set('.lineup-big-title', { autoAlpha: 1 });
  resetLineupTactics();
  gsap.set(stage, { autoAlpha: 1 });
  gsap.set('.lineup-about-copy', { clearProps: 'all' });
  positionSinglePortrait('start');
  gsap.set('.lineup-about-photo', { autoAlpha: 0, y: 28 });
  gsap.set('.lineup-about-copy', { autoAlpha: 0, y: 36 });
  gsap.set(['.lineup-title', '.lineup-board', '.view-buttons'], { autoAlpha: 0 });
  gsap.set('.lineup-card-inner', { autoAlpha: 0 });
  gsap.set(profile, { autoAlpha: 0, x: 0 });
  const panel = { left: 0, width: 1920, radius: 0 };
  stage.style.setProperty('--lineup-profile-bg-opacity', '1');
  stage.style.setProperty('--lineup-panel-left', '0px');
  stage.style.setProperty('--lineup-panel-width', '1920px');
  stage.style.setProperty('--lineup-panel-radius', '0px');
  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
  timeline.to('.lineup-intro-content', { y: -48, scale: .96, autoAlpha: 0, duration: .19, ease: 'power2.inOut' }, .12);
  timeline.fromTo('.lineup-about-photo', { y: 32, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .24, ease: 'power3.out', immediateRender: false }, .35);
  timeline.fromTo('.lineup-about-copy', { y: 38, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .26, ease: 'power3.out', immediateRender: false }, .42);
  timeline.to('.lineup-about-copy', { y: -28, autoAlpha: 0, duration: .18, ease: 'power2.inOut' }, .84);
  timeline.to('.lineup-scroll-hint', { autoAlpha: 0, duration: .11 }, .91);
  timeline.to('.lineup-tactics-svg', { autoAlpha: 0, duration: .40, ease: 'power1.inOut' }, .69);
  if (desktop) {
    const photo = document.querySelector('.lineup-about-photo');
    const target = profile.querySelector('.profile-portrait');
    const from = photo.getBoundingClientRect(), to = target.getBoundingClientRect();
    const dx = to.left - from.left, dy = to.top - (from.top - 28);
    const scaleX = to.width / from.width, scaleY = to.height / from.height;
    timeline.to(panel, { left: 1317, width: 603, radius: 80, duration: .44, ease: 'power2.inOut' }, 1.00)
      .to(photo, { x: dx, y: dy, scaleX, scaleY, duration: .44, ease: 'power2.inOut' }, 1.00);
    timeline.to(profile, { autoAlpha: 1, duration: .09, ease: 'none' }, 1.43)
      .to('.lineup-big-title', { autoAlpha: 0, duration: .04 }, 1.53);
  }
  else {
    timeline.to('.lineup-about-photo', { y: -24, autoAlpha: 0, duration: .17, ease: 'power2.in' }, 1.02)
      .to('.lineup-big-title', { autoAlpha: 0, duration: .16, ease: 'power2.inOut' }, 1.16);
  }
  timeline.to('.lineup-title', { autoAlpha: 1, duration: .12 }, 1.55)
    .to('.lineup-board', { autoAlpha: 1, duration: .15 }, 1.58)
    .to('.view-buttons', { autoAlpha: 1, duration: .12 }, 1.64);
  // 카드 배치
  const rows = [['design', 'logo'], ['clone'], ['web', 'app'], ['contact']];
  const cardAppearDuration = .13;
  const cardSettleDuration = .24 * 1.6;
  const cardRowGap = .55 + (cardSettleDuration - .24);
  rows.forEach((names, group) => names.forEach((name, i) => {
    const el = section.querySelector('.lineup-card[data-category="' + name + '"] .lineup-card-inner');
    if (!el)
      return;
    const card = el.parentElement, field = section.querySelector('.soccer-field');
    const y = field.clientHeight * .46 - card.offsetTop - card.clientHeight / 2;
    const x = field.clientWidth * (names.length === 1 ? .5 : (i === 0 ? .32 : .68)) - card.offsetLeft - card.clientWidth / 2;
    const at = 1.77 + group * cardRowGap;
    timeline.fromTo(el, { x, y: y + 30, scale: .9, autoAlpha: 0 }, { x, y, scale: desktop ? 1.2 : 1.1, autoAlpha: 1, duration: cardAppearDuration, ease: 'power2.out', immediateRender: false }, at).to(el, { x: 0, y: 0, scale: 1, duration: cardSettleDuration, ease: 'power3.out' }, at + cardAppearDuration);
  }));
  const lastCardSettlesAt = 1.77 + (rows.length - 1) * cardRowGap + cardAppearDuration + cardSettleDuration;
  const completedLineupHold = 0;
  timeline.to({}, { duration: completedLineupHold }, lastCardSettlesAt);
  const previousTimelineDuration = 1.65;
  travel *= timeline.duration() / previousTimelineDuration;
  area.style.setProperty('--lineup-travel', travel + 'px');
  const head = { p: 0 };
  let dead = false;
  function draw() {
    if (dead)
      return;
    timeline.progress(head.p);
    if (desktop) {
      stage.style.setProperty('--lineup-panel-left', panel.left + 'px');
      stage.style.setProperty('--lineup-panel-width', panel.width + 'px');
      stage.style.setProperty('--lineup-panel-radius', panel.radius + 'px');
    }
    section.classList.toggle('lineup-panel-shrunk', head.p > .48);
    if (head.p > .995) {
      timeline.progress(1);
      finishLineup(true);
    }
  }
  function scroll() {
    if (dead || section.hidden)
      return;
    const top = area.getBoundingClientRect().top + scrollY;
    const next = Math.max(0, Math.min(1, (scrollY - top) / travel));
    if (next > .03 && lineupTitleEntrance) {
      lineupTitleEntrance.progress(1);
      lineupTitleEntrance.kill();
      lineupTitleEntrance = null;
    }
    gsap.to(head, { p: next, duration: .18, overwrite: true, onUpdate: draw });
  }
  window.addEventListener('scroll', scroll, { passive: true });
  lineupController = {
    destroy() {
      dead = true;
      window.removeEventListener('scroll', scroll);
      gsap.killTweensOf(head);
      timeline.kill();
      gsap.set('.lineup-intro-content,.lineup-scroll-hint,.lineup-about-copy', { clearProps: 'all' });
      gsap.set('.lineup-card-inner', { clearProps: 'all' });
      gsap.set('.view-buttons,.lineup-title,.lineup-board', { clearProps: 'opacity,visibility' });
      gsap.set(profile, { clearProps: 'transform,opacity,visibility' });
      section.classList.remove('lineup-panel-shrunk');
    }
  };
  draw();
  scroll();
}
// SKIP LINEUP
function skipLineupAnimation() {
  finishLineup();
  window.scrollTo(0, 0);
}
// SKIP INTRO
function skipIntroAnimation() {
  closeIntro(true);
}
// 반응형 라인업
function resizeLineupAnimation() {
  if ($('#lineup').prop('hidden'))
    return;
  clearTimeout(resizeTimer);
  if (lineupFinished) {
    resizeTimer = setTimeout(() => positionSinglePortrait('final'), 100);
    return;
  }
  resizeTimer = setTimeout(() => {
    finishLineup();
    window.scrollTo(0, 0);
  }, 150);
}
// 프로젝트 설명 효과
function animateProjectInfo() {
  if (useLessMotion || !window.gsap)
    return;
  gsap.fromTo('.info-content', { opacity: 0, y: 5 }, { opacity: 1, y: 0, duration: .2, overwrite: true, clearProps: 'all' });
}
// 미니 전술판 공 이동
function moveMiniBall(categoryName, rightAway) {
  const field = document.querySelector(categoryName === 'contact' ? '#contact .mini-field' : '#projects .mini-field'), point = field.querySelector('[data-category="' + categoryName + '"]'), ball = field.querySelector('.mini-ball');
  if (!point)
    return;
  const left = point.offsetLeft + (point.offsetWidth - ball.offsetWidth) / 2, top = point.offsetTop + (point.offsetHeight - ball.offsetHeight) / 2;
  if (window.gsap && !useLessMotion)
    gsap.to(ball, { left, top, duration: rightAway ? 0 : .42, ease: 'power2.inOut', overwrite: true });
  else {
    $(ball).css({ left, top });
  }
  ball.alt = '현재 카테고리: ' + categoryName;
  $(field).find('[data-category]').removeAttr('aria-current');
  $(point).attr('aria-current', 'page');
}
// CONTACT 효과
function playContact() {
  stopContact();
  if (useLessMotion || !window.gsap) {
    $('.contact-welcome').hide();
    return;
  }
  $('.contact-welcome').show();
  contactTimeline = gsap.timeline();
  contactTimeline.fromTo('.contact-welcome', { autoAlpha: 1 }, { autoAlpha: 0, duration: .55, delay: 1.1 }).fromTo('.contact .contact-title', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .5, clearProps: 'all' }, 1.2).set('.contact-welcome', { display: 'none' });
}
function stopContact() {
  contactTimeline?.kill();
  contactTimeline = null;
  $('.contact-welcome').hide();
}
