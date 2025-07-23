
jQuery(document).ready(function($) {
  $('.list-group li:has(> ul.list-group-flush)').addClass('has-sub');
  $('.nav-toggle').on('click', function(e) {
    e.preventDefault();

    const $toggle = $(this);
    const $currentLI = $toggle.closest('li');
    const $submenu = $currentLI.children('ul.list-group-flush');

    // 1. Đóng tất cả submenu của các anh em cùng cấp
    $currentLI
      .siblings('li')
      .each(function() {
        const $li = $(this);
        const $siblingSub = $li.children('ul.list-group-flush');

        if ($siblingSub.is(':visible')) {
          $siblingSub.slideUp();
          $li.find('> div > .nav-toggle').removeClass('active'); // Xóa active ở anh em
        }
      });

    // 2. Mở/đóng submenu hiện tại
    if ($submenu.is(':visible')) {
      $submenu.slideUp();
      $toggle.removeClass('active');
    } else {
      $submenu.slideDown();
      $toggle.addClass('active');
    }
  });
});
