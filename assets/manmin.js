/* MANMIN 종합관리 허브 · 공통 스크립트 · VER-1.1
   1) 표 → 폰에서 카드로 전환하기 위해 각 td 에 data-label 주입
   2) 네비·탭바 현재 위치 표시
   3) PWA 등록 및 설치 버튼 제어                                   */
(function () {
  'use strict';

  /* ---------- 1. 표 라벨 주입 ---------- */
  function labelTables(root) {
    var tables = (root || document).querySelectorAll('table');
    for (var t = 0; t < tables.length; t++) {
      var tbl = tables[t];
      if (tbl.closest('.meta')) continue;              // 메타표는 이미 2열 구조
      var head = tbl.querySelector('thead tr');
      if (!head) continue;
      var ths = head.children, labels = [];
      for (var i = 0; i < ths.length; i++) labels.push((ths[i].textContent || '').trim());
      var rows = tbl.querySelectorAll('tbody tr');
      for (var r = 0; r < rows.length; r++) {
        var tds = rows[r].children;
        for (var c = 0; c < tds.length && c < labels.length; c++) {
          if (!tds[c].hasAttribute('data-label')) tds[c].setAttribute('data-label', labels[c]);
        }
      }
    }
  }
  window.MANMIN_labelTables = labelTables;             // JS로 표를 그린 뒤 다시 호출용

  /* ---------- 2. 현재 위치 표시 ---------- */
  function markCurrent() {
    var k = document.body.getAttribute('data-mm') || '';
    var a = document.querySelectorAll('.mm-links a,.mm-tabs a');
    for (var i = 0; i < a.length; i++) {
      if (a[i].getAttribute('data-k') === k) a[i].setAttribute('aria-current', 'page');
      else a[i].removeAttribute('aria-current');
    }
  }

  /* ---------- 3. PWA ---------- */
  function pwa() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
      });
    }
    var dp = null;
    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault(); dp = e;
      var b = document.getElementById('mm-install'); if (b) b.hidden = false;
    });
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('#mm-install');
      if (!t || !dp) return;
      dp.prompt(); dp.userChoice.then(function () { dp = null; t.hidden = true; });
    });
    window.addEventListener('appinstalled', function () {
      var b = document.getElementById('mm-install'); if (b) b.hidden = true;
    });
  }

  function init() { labelTables(); markCurrent(); pwa(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
