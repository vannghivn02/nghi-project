$(document).ready(function () {
  if ($(".fe-header #toggle-search").length) {
    $(".fe-header #toggle-search").on("click", function () {
      $(".fe-header #header-search").toggleClass("active");
    });
  }

  if ($(".fe-header .offcanvas .toggle-menu-list").length) {
    $(".fe-header .offcanvas .toggle-menu-list").on("click", function () {
      const $subMenu = $(this).children(".sub-menu-list");

      if ($subMenu.hasClass("active")) {
        $subMenu.removeClass("active").slideUp(200);
      } else {
        $(".fe-header .offcanvas .sub-menu-list").removeClass("active").slideUp(200);
        $subMenu.addClass("active").slideDown(200);
      }
    });
  }

  if ($(".fe-header .offcanvas .toggle-menu-list-2").length) {
    $(".fe-header .offcanvas .toggle-menu-list-2").on("click", function (e) {
      e.stopPropagation();
      const $subMenu1 = $(this).children(".sub-menu-list-2");

      if ($subMenu1.hasClass("active")) {
        $subMenu1.removeClass("active").slideUp(200);
      } else {
        $(".fe-header .offcanvas .sub-menu-list-2").removeClass("active").slideUp(200);
        $subMenu1.addClass("active").slideDown(200);
      }
    });
  }

  const slickConfigs = [
    { selector: ".slide_banner-3", settings: { slidesToShow: 3, slidesToScroll: 1, adaptiveHeight: true, arrows: false, dots: false, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 768, settings: { slidesToShow: 1 } }] } },
    { selector: ".slide_banner-4", settings: { slidesToShow: 4, slidesToScroll: 1, adaptiveHeight: true, autoplay: true, autoplaySpeed: 3000, arrows: false, dots: false, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }] } },
    { selector: ".slide_banner-2", settings: { slidesToShow: 2, slidesToScroll: 1, adaptiveHeight: true, arrows: false, dots: false, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }] } },
    { selector: ".banner_slide", settings: { dots: true, arrows: true, infinite: true, speed: 500, fade: true, autoplay: true, autoplaySpeed: 3000, responsive: [{ breakpoint: 768, settings: { dots: false } }] } },
    { selector: ".products-slider", settings: { dots: false, arrows: true, speed: 300, slidesToShow: 5, slidesToScroll: 1, autoplay: true, infinite: true, autoplaySpeed: 3000, cssEase: 'linear', responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4 } }, { breakpoint: 992, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }] } },
    { selector: ".products-slider-left", settings: { rtl: true, dots: false, arrows: true, speed: 300, slidesToShow: 5, slidesToScroll: 1, autoplay: true, infinite: true, autoplaySpeed: 3000, cssEase: 'linear', responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4 } }, { breakpoint: 992, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }] } },
    { selector: ".products-rate", settings: { dots: false, arrows: true, speed: 300, slidesToShow: 5, slidesToScroll: 1, autoplay: true, infinite: false, autoplaySpeed: 3000, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4 } }, { breakpoint: 992, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }] } },
    { selector: ".products-slider-two-row", settings: { dots: false, arrows: true, infinite: false, speed: 300, slidesToShow: 5, rows: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, cssEase: 'linear', responsive: [{ breakpoint: 1024, settings: { slidesToShow: 4 } }, { breakpoint: 992, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }] } },
    { selector: ".slick-category", settings: { dots: false, arrows: false, infinite: true, speed: 300, slidesToShow: 10, slidesToScroll: 10, autoplay: true, autoplaySpeed: 3000, responsive: [{ breakpoint: 1400, settings: { slidesToShow: 8, slidesToScroll: 8 } }, { breakpoint: 992, settings: { slidesToShow: 6, slidesToScroll: 6 } }, { breakpoint: 767, settings: { slidesToShow: 4, slidesToScroll: 4 } }] } },
    { selector: ".slick-category-8", settings: { dots: false, arrows: false, infinite: true, speed: 300, slidesToShow: 8, slidesToScroll: 8, autoplay: true, autoplaySpeed: 3000, responsive: [{ breakpoint: 1240, settings: { slidesToShow: 6, slidesToScroll: 6 } }, { breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 4 } }] } },
    { selector: ".slick-category-6", settings: { dots: false, arrows: false, infinite: true, speed: 300, slidesToShow: 6, slidesToScroll: 6, autoplay: true, autoplaySpeed: 3000, responsive: [{ breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 4 } }, { breakpoint: 767, settings: { slidesToShow: 4, slidesToScroll: 4 } }] } },
    { selector: ".slick-category-6-2", settings: { dots: false, arrows: false, infinite: true, speed: 300, slidesToShow: 6, slidesToScroll: 6, autoplay: true, autoplaySpeed: 3000, rows: 2, responsive: [{ breakpoint: 992, settings: { slidesToShow: 4, slidesToScroll: 4 } }] } },
    { selector: ".slide-video", settings: { dots: false, arrows: true, infinite: false, speed: 300, slidesToShow: 4, slidesToScroll: 4, autoplay: true, autoplaySpeed: 3000, rows: 2, responsive: [{ breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2 } }] } }
  ];

  slickConfigs.forEach(config => {
    if ($(config.selector).length) {
      $(config.selector).slick(config.settings);
    }
  });

  // Countdown
  if ($("#days").length && $("#hours").length && $("#minutes").length && $("#seconds").length) {
    const countDownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance >= 0) {
        $("#days").text(days.toString().padStart(2, "0"));
        $("#hours").text(hours.toString().padStart(2, "0"));
        $("#minutes").text(minutes.toString().padStart(2, "0"));
        $("#seconds").text(seconds.toString().padStart(2, "0"));
      } else {
        clearInterval(x);
        $("#days, #hours, #minutes, #seconds").text("00");
      }
    }, 1000);
  }

  // Scroll padding change
  // $(window).on('scroll resize', function () {
  //   const scrollTop = $(this).scrollTop();
  //   const windowWidth = $(window).width();
  //   if (windowWidth >= 768 && $('#header-main').length) {
  //     $('#header-main').css({
  //       'padding-top': scrollTop > 35 ? '0.4rem' : '1rem',
  //       'padding-bottom': scrollTop > 35 ? '0.4rem' : '1rem'
  //     });
  //   }
  // });

  if ($('.popup-youtube, .popup-vimeo').length) {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  if ($('.btn-search').length && $('.header-search').length) {
    $('.btn-search').on('click', function () {
      $(this).toggleClass('active');
      $('.header-search').toggleClass('active');
    });
  }

  if ($('.image-link').length) {
    $('.image-link').magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      closeOnContentClick: true,
      closeBtnInside: true,
      gallery: {
        enabled: true
      },
      callbacks: {
        elementParse: function (item) {
          item.src = item.el.attr('data-image-src') || item.el.find('a').attr('href');
        }
      }
    });
  }
});

// =========================
// new update 6/2025
// ===========================
numSlick = 0;
function sliderList($sliderName, $toshow, $toshow_1024, $rows) {
    $($sliderName).each( function() {
        numSlick++;
        $(this).addClass( 'slider-' + numSlick ).slick({
            slidesToShow: $toshow,
            rows: $rows,
            slidesToScroll: 1,
            arrow: true,
            autoplay: true,
            pauseOnHover: true,
            //- rtl: true,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: $toshow_1024,
                }
            },{
                breakpoint: 991,
                settings: {
                slidesToShow: 4,
                }
            },{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                }
            },{
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                }
            }
            ]
        });
    });
};
function sliderSmallItem($sliderName, $toshow, $toshow_991, $rows) {
    $($sliderName).each( function() {
        numSlick++;
        $(this).addClass( 'slider-' + numSlick ).slick({
            slidesToShow: $toshow,
            rows: $rows,
            slidesToScroll: 1,
            arrow: true,
            autoplay: true,
            pauseOnHover: true,
            //- rtl: true,
            responsive: [{
                breakpoint: 991,
                settings: {
                slidesToShow: $toshow_991,
                }
            }]
        });
    });
};
function setEqualHeightSlickItems() {
  var maxHeight = 0;
  // Tìm thằng cao nhất
  $('.slick-row-2 .post-item').each(function () {
    var thisHeight = $(this).outerHeight();
    if (thisHeight > maxHeight) maxHeight = thisHeight;
  });
  // Gán lại chiều cao
  $('.slick-row-2 .post-item').css('height', maxHeight + 'px');
}
// Gọi khi slick đã khởi tạo
$('.slick-row-2').on('setPosition', function () {
  setEqualHeightSlickItems();
});

document.addEventListener("DOMContentLoaded", function () {
  const headerMain   = document.querySelector("#header-sticky");
  const headerWrap   = document.querySelector(".fe-header");
  const originalLogo = document.querySelector("#logo");

  if (!headerMain || !headerWrap || !originalLogo) return;

  // Tạo clone header sticky
  const stickyClone = headerMain.cloneNode(true);
  stickyClone.classList.add("sticky-header-clone");
  stickyClone.id = "header-main-sticky";

  // Thêm bg-sticky vào đầu
  const bgDiv = document.createElement("div");
  bgDiv.className = "bg-sticky";
  stickyClone.prepend(bgDiv);

  // Gắn vào DOM
  headerWrap.appendChild(stickyClone);

  // Clone logo 2 lần cho 2 .header-bottom-item
  const logoHTML = originalLogo.outerHTML.replace('id="logo"', 'class="stick-logo"');
  const items = stickyClone.querySelectorAll(".header-bottom-item");

  items.forEach((item, index) => {
    if (!item.querySelector(".stick-logo")) {
      item.insertAdjacentHTML("afterbegin", logoHTML);
    }
  });

  // Animation sticky
  const triggerY = headerWrap.offsetTop + headerWrap.offsetHeight;
  let lastY = window.scrollY;
  let visible = false;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const sticky = document.querySelector("#header-main-sticky");

    if (y > triggerY && !visible) {
      sticky.classList.add("show");
      headerWrap.classList.add("scrolling");
      visible = true;

      // ✅ Đổi màu chữ khi scroll xuống
      document.querySelectorAll("#header-main-sticky .navbar-nav a.nav-link").forEach(link => {
        link.style.setProperty("color", "#333", "important");
      });

    } else if (y <= triggerY && visible) {
      sticky.classList.remove("show");
      headerWrap.classList.remove("scrolling");
      visible = false;

      // ✅ Trả lại màu chữ mặc định khi scroll lên
      // document.querySelectorAll(".navbar-nav a.nav-link").forEach(link => {
      //   link.style.removeProperty("color");
      // });
    }

    document.body.classList.toggle("is-scrolling", y > lastY);
    lastY = y;
  });
});

jQuery(document).ready(function($) {
  function setupMenu($scope) {
    $scope.find('li').each(function() {
      var $li = $(this);
      if ($li.children('.nav-submenu').length) {
        $li.addClass('menu-dropdown');
        if ($li.children('.btn-submenu').length == 0) {
          $li.prepend('<button type="button" class="btn-submenu"></button>');
        }
        $li.children('.nav-submenu').hide(); // Ẩn ban đầu
        setupMenu($li.children('.nav-submenu')); // Đệ quy cấp con
      }
    });
  }

  setupMenu($('.navbar-nav'));

  // Xử lý click btn-submenu
  $('.navbar-nav').on('click', '.btn-submenu', function(e) {
    e.preventDefault();
    var $li = $(this).closest('li');
    var $submenu = $li.children('.nav-submenu');

    // Đóng tất cả anh em cùng cấp
    $li.siblings('.active').each(function() {
      $(this).removeClass('active').children('.nav-submenu:visible').stop(true, true).slideUp(350);
    });

    // Toggle li hiện tại
    if ($li.hasClass('active')) {
      $li.removeClass('active');
      $submenu.stop(true, true).slideUp(350);
    } else {
      $li.addClass('active');
      $submenu.stop(true, true).slideDown(350);
    }
  });

  // Nút đóng toàn bộ
  $('.btn-close').on('click', function(e) {
    e.preventDefault();
    $('.navbar-nav li.active').removeClass('active').children('.nav-submenu:visible').stop(true, true).slideUp(350);
  });
});


document.addEventListener('DOMContentLoaded', function () {
      console.log('DOM Loaded');

      window.addEventListener('scroll', function () {
        console.log('Scrolled! scrollY =', window.scrollY);

        const header = document.querySelector('header .header-3');
        if (!header) {
          console.log('Không tìm thấy <header>');
          return;
        }

        if (window.scrollY > 0) {
          console.log('Thêm class is-scrolled');
          header.classList.add('is-scrolled');
        } else {
          console.log('Gỡ class is-scrolled');
          header.classList.remove('is-scrolled');
        }
      });
    });