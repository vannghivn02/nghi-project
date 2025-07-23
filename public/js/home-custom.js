$(document).ready(function () {
  var $sidebar = $('#sidebar-category');
  var $navList = $sidebar.find('.navbar-nav').first(); // ul đầu tiên
  var $navItems = $navList.children('li.nav-item');

  var maxVisible = 10;

  if ($navItems.length > maxVisible) {
    var $visibleItems = $navItems.slice(0, maxVisible);
    var $hiddenItems = $navItems.slice(maxVisible);

    var $navMore = $('<ul class="navbar-nav nav-more"></ul>');
    $navMore.append($hiddenItems);

    $navList.after($navMore);

    var $toggleBtn = $(
      '<button id="toggleMore" class="category-more"><span></span>Xem thêm</button>'
    );
    $navMore.after($toggleBtn);

    $toggleBtn.on('click', function () {
      $navMore.slideToggle();
      var isExpanded = $(this).data('expanded') || false;
      if (isExpanded) {
        $(this).text('Xem thêm').removeClass('action');
        // giữ span nếu cần thêm nội dung, ví dụ icon
        $(this).prepend('<span></span>');
      } else {
        $(this).text('Thu gọn').addClass('action');
        $(this).prepend('<span></span>');
      }
      $(this).data('expanded', !isExpanded);
    });

    $visibleItems.appendTo($navList);
  }

  $navList.show();
});
