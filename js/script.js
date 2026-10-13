// 페이지 이벤트
if ('scrollRestoration' in history)
  history.scrollRestoration = 'manual';
$(function () {
  const $lineup = $('#lineup'), $projects = $('#projects'), $contact = $('#contact'), $grid = $('.project-grid'), $info = $('.info-content');
  let currentCategory = '', selected = -1, lastCard = null, noticeTimer;
  const reportIds = { design: ['acai', 'pickbake', 'gukil', 'uruos'], logo: ['quiet-butter', 'quiet-butter'], clone: ['busan', 'climate', 'dauoffice', 'bottlebunker'], web: ['terra', 'readon'], app: ['bug-hunter', 'bug-hunter'] };
  // 프로젝트 데이터
  function getReport() {
    return PROJECTS.find(p => p.id === reportIds[currentCategory]?.[selected]);
  }
  function notice(s) {
    $('.notice').text(s).addClass('visible');
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => $('.notice').removeClass('visible'), 2400);
  }
  // 프로젝트 설명
  function showInfo(project, animate = true) {
    const c = categories[currentCategory];
    if (!c)
      return;
    $info.empty();
    $('.info-box').toggleClass('has-detail', !!project);
    $info.append($('<h2>', { class: project ? 'detail-title' : '' }).text(project ? project.name : c.title), $('<img>', { class: 'info-line', src: 'images/white-line.svg', alt: '' }));
    if (!project) {
      $info.append($('<dl>').append($('<dt>').text('WORK FLOW'), $('<dd>').text(c.workflow), $('<dt>').text('TOOLS'), $('<dd>').text(c.tools)), $('<p>').text(c.description));
    }
    else {
      const r = getReport();
      const overview = r?.slides?.[0];
      if (overview) {
        const $overview = $('<section>', { class: 'project-overview', 'aria-label': '작품 개요' });
        $overview.append($('<h3>', { class: 'overview-label', text: '개요' }), $('<h4>', { class: 'overview-heading', text: overview.title.replace(/\n/g, ' ') }), $('<p>', { class: 'overview-body', text: overview.body }));
        $info.append($overview);
      }
      const $actions = $('<div>', { class: 'detail-footer' }).append($('<button>', { type: 'button', text: '작품 크게 보기 ↗' }).on('click', () => showArtwork(project)));
      if (r?.link)
        $actions.append($('<a>', { href: r.link, target: '_blank', rel: 'noopener noreferrer', text: r.linkLabel + ' ↗' }));
      if (r?.notion)
        $actions.append($('<a>', { href: r.notion, target: '_blank', rel: 'noopener noreferrer', text: '작업 기록 ↗' }));
      $info.append($actions);
    }
    if (animate)
      animateProjectInfo();
    resizePage();
  }
  // 이미지 크게 보기
  function showArtwork(p) {
    const $content = $('.artwork-content').empty();
    const images = p.kind === 'logo-composite' ? ['logo-gallery-top.png', 'logo-gallery-bottom.png'] : p.kind === 'bug-hunter' ? ['app-bughunter.png'] : [p.image];
    images.forEach(name => {
      const $img = $('<img>', { src: 'images/' + name, alt: p.name });
      if (name === 'logo-gallery-top.png' || name === 'logo-quiet-butter.png')
        $img.addClass('quiet-butter-white');
      $content.append($img);
    });
    const d = document.querySelector('.artwork-dialog');
    lastCard = document.activeElement;
    d.showModal();
    d.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    $('.artwork-close').trigger('focus');
  }
  // 작품 선택
  function selectProject(index) {
    selected = index;
    $grid.find('.project-card').each(function (i) {
      $(this).toggleClass('selected', i === index).attr('aria-pressed', String(i === index));
    });
    $('.reset-button').prop('hidden', false);
    showInfo(categories[currentCategory].projects[index]);
    if (innerWidth <= 900)
      document.querySelector('#projects .project-info').scrollIntoView({ behavior: useLessMotion ? 'instant' : 'smooth', block: 'start' });
  }
  // 작품 선택 초기화
  function resetProject(animate = true) {
    selected = -1;
    $grid.find('.project-card').removeClass('selected').attr('aria-pressed', 'false');
    $('.reset-button').prop('hidden', true);
    if (categories[currentCategory])
      showInfo(null, animate);
  }
  // 작품 카드 목록
  function showProjectList() {
    const items = categories[currentCategory].projects;
    $grid.empty();
    items.forEach((p, i) => {
      const $card = $('<button>', { type: 'button', class: 'project-card', 'aria-label': p.name, 'aria-pressed': 'false' });
      if (p.kind === 'logo-composite') {
        ['logo-gallery-top.png', 'logo-gallery-bottom.png'].forEach(n => $card.append($('<div>', { class: 'logo-piece' }).append($('<img>', { src: 'images/' + n, alt: '' }))));
      }
      else {
        if (p.kind === 'bug-hunter')
          $card.addClass('bug-hunter');
        const $img = $('<img>', { src: 'images/' + (p.kind === 'bug-hunter' ? 'app-bughunter.png' : p.image), alt: '' });
        if (p.crop)
          $img.css(p.crop);
        $card.append($img);
      }
      $card.append($('<span>', { class: 'image-title', 'aria-hidden': 'true', text: p.name + ' ↗' }));
      $card.on('click', () => selectProject(i));
      $grid.append($card);
    });
  }
  // 화면 전환
  function openPage(page, save = true) {
    stopContact();
    if (!['lineup', 'contact', ...Object.keys(categories)].includes(page))
      page = 'lineup';
    if (page !== 'lineup')
      finishLineup();
    $lineup.prop('hidden', page !== 'lineup');
    $contact.prop('hidden', page !== 'contact');
    $projects.prop('hidden', !categories[page]);
    if (page === 'lineup') {
      currentCategory = '';
      if (lineupFinished)
        finishLineup();
    }
    else if (page === 'contact') {
      currentCategory = 'contact';
      moveMiniBall('contact', true);
      playContact();
    }
    else {
      currentCategory = page;
      $projects.attr('data-category', page);
      $('.project-title', $projects).text(categories[page].label);
      showProjectList();
      resetProject(false);
      moveMiniBall(page, false);
    }
    if (save && location.hash !== '#' + page)
      history.pushState(null, '', '#' + page);
    window.scrollTo(0, 0);
    resizePage();
  }
  // FORMATION · LIST
  $('.view-button').on('click', function () {
    const list = !$('.lineup-board').hasClass('show-list');
    $('.lineup-board').toggleClass('show-list', list);
    $lineup.toggleClass('has-list', list);
    $(this).toggleClass('active', list).attr({ 'aria-label': list ? '포메이션 보기' : '리스트 보기', 'aria-pressed': String(list) });
    $('.list-mode').prop('inert', !list);
    $('.formation-view').prop('inert', list);
  });
  // 카테고리 이동
  $('[data-category]').on('click', function () {
    openPage($(this).attr('data-category'));
  });
  $('.back-button').on('click', () => openPage('lineup'));
  $('.reset-button').on('click', () => resetProject());
  // 인트로 음소거
  $('.intro-sound-toggle').on('click', function () {
    const video = document.querySelector('.intro-video');
    if (!video)
      return;
    video.muted = !video.muted;
    $(this).attr({ 'aria-pressed': String(!video.muted), 'aria-label': video.muted ? '인트로 영상 소리 켜기' : '인트로 영상 소리 끄기', title: video.muted ? '소리 켜기' : '소리 끄기' });
  });
  // SKIP 버튼
  $('.skip-button').on('click', skipIntroAnimation);
  $('.lineup-skip').on('click', skipLineupAnimation);
  $('.skip-content').on('click', e => {
    e.preventDefault();
    closeIntro(false);
    finishLineup();
    openPage('lineup');
  });
  // REPLAY INTRO
  $('.replay-intro').on('click', () => {
    if (useLessMotion) {
      notice('기기의 동작 줄이기 설정이 켜져 있어 애니메이션이 생략됩니다.');
      return;
    }
    $('.lineup-board').removeClass('show-list');
    $lineup.removeClass('has-list');
    $('.view-button').removeClass('active').attr({ 'aria-label': '리스트 보기', 'aria-pressed': 'false' });
    $('.list-mode').prop('inert', true);
    $('.formation-view').prop('inert', false);
    window.scrollTo(0, 0);
    playLineup();
    playIntro();
  });
  // 동작 줄이기
  function applyMotion() {
    document.documentElement.classList.toggle('motion-off', useLessMotion);
  }
  motionQuery.addEventListener('change', () => {
    useLessMotion = motionQuery.matches;
    applyMotion();
    if (useLessMotion) {
      closeIntro(false);
      finishLineup();
      stopContact();
    }
  });
  window.addEventListener('popstate', () => openPage(location.hash.slice(1) || 'lineup', false));
  window.addEventListener('hashchange', () => openPage(location.hash.slice(1) || 'lineup', false));
  // 작품 이미지 팝업

  $('.artwork-close').on('click', () => document.querySelector('.artwork-dialog').close());
  $('.artwork-dialog').on('close', () => {
    document.body.style.overflow = '';
    lastCard?.focus({ preventScroll: true });
  });
  // 키보드 접근
  document.addEventListener('keydown', e => {
    if ($('#intro').hasClass('is-complete'))
      return;
    if (e.key === 'Escape') {
      skipIntroAnimation();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = ['.skip-button', '.intro-sound-toggle']
        .map(selector => document.querySelector('#intro ' + selector))
        .filter(el => el && !el.hidden && getComputedStyle(el).display !== 'none');
      if (!focusables.length)
        return;
      const current = focusables.indexOf(document.activeElement);
      const next = focusables[(current + (e.shiftKey ? -1 : 1) + focusables.length) % focusables.length];
      e.preventDefault();
      next.focus();
    }
  });
  // 이메일 복사
  $('.copy-email').on('click', async () => {
    try {
      await navigator.clipboard.writeText('sym4352@naver.com');
      notice('이메일 주소를 복사했습니다.');
    }
    catch {
      notice('sym4352@naver.com');
    }
  });
  // 반응형 크기 계산
  function resizePage() {
    const width = document.documentElement.clientWidth, scale = width > 900 ? width / 1920 : 1;
    document.documentElement.style.setProperty('--scale', scale);
    document.documentElement.style.setProperty('--canvas-height', 1080 * scale + 'px');
    document.documentElement.style.setProperty('--visible-canvas-height', (width > 900 ? window.innerHeight / scale : window.innerHeight) + 'px');
    document.documentElement.style.setProperty('--profile-content-scale', width > 900 ? Math.max(.58, Math.min(1, (window.innerHeight / scale - 28) / 995)) : 1);
    document.documentElement.style.setProperty('--field-scale', width * .88 / 1102);
    const fieldScale = Math.min(1, width * .9 / 485);
    document.documentElement.style.setProperty('--tactics-scale', fieldScale);
    document.documentElement.style.setProperty('--tactics-margin', -274.365 * (1 - fieldScale) + 'px');
    document.documentElement.style.setProperty('--info-line-scale', width <= 900 ? width * .9 / 461 : 1);
    document.documentElement.style.setProperty('--inner-line-scale', width <= 900 ? (width * .9 - (width <= 500 ? 36 : 44)) / 461 : 1);
  }
  $(window).on('resize', () => {
    resizePage();
    resizeLineupAnimation();
  });
  // 시작 화면
  if (location.hash)
    history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0);
  resizePage();
  applyMotion();
  openPage('lineup', false);
  if (useLessMotion) {
    closeIntro(false);
    finishLineup();
  }
  else {
    playLineup();
    playIntro();
  }
  window.addEventListener('pageshow', e => {
    if (!e.persisted)
      window.scrollTo(0, 0);
  });
});
