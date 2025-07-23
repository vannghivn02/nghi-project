"use strict";

// var swiper = new Swiper(".banner-main .slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 6000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".banner-main .slider .swiper-button-next",
//         prevEl: ".banner-main .slider .swiper-button-prev",
//     },
//     on: {
//         init: function () {
//             showContentBannerMain();
//         },
//         slideChange: function () {
//             showContentBannerMain();
//         },
//         autoplay: function () {
//             // Lệnh để bắt đầu phát video khi slider tự động chuyển slide
//             var currentSlide = this.slides[this.activeIndex];
//             if (currentSlide) {
//                 var video = currentSlide.querySelector('video');
//                 if (video) {
//                     video.play();
//                 }
//             }
//         },
//     },
// });
function showContentBannerMain() {
  var title = $('.banner-main .slider .content h3');
  var content = $('.banner-main .slider .content span'); // Ẩn nội dung hiện tại

  if (content.length > 0) {
    title.css('opacity', 0);
    content.css('opacity', 0); // Sau 1 giây, hiển thị nội dung

    setTimeout(function () {
      title.css('opacity', 1);
    }, 1000);
    setTimeout(function () {
      content.css('opacity', 1);
    }, 3000);
  }
} // var swiper2 = new Swiper(".list_testimonial", {
//     slidesPerView: 4,
//     spaceBetween: 40,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".list_testimonial .swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".list_testimonial .swiper-button-next",
//         prevEl: ".list_testimonial .swiper-button-prev",
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 20
//         },
//         // when window width is >= 480px
//         480: {
//             slidesPerView: 1,
//             spaceBetween: 30
//         },
//         // when window width is >= 640px
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 40
//         },
//         991: {
//             slidesPerView: 4,
//             spaceBetween: 40
//         }
//     }
// });
// var swiper3 = new Swiper(".productSwiper", {
//     slidesPerView: 5,
//     loop: true,
//     navigation: {
//         nextEl: ".productSwiper .next-btn",
//         prevEl: ".productSwiper .prev-btn",
//     },
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 2,
//         },
//         576: {
//             slidesPerView: 3,
//         },
//         992: {
//             slidesPerView: 4,
//         },
//         1200: {
//             slidesPerView: 5,
//         },
//     },
// });
// var swiper4 = new Swiper(".brandSwiper", {
//     slidesPerView: 6,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".brand-list .next-btn",
//         prevEl: ".brand-list .prev-btn",
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 3,
//             spaceBetween: 20
//         },
//         576: {
//             slidesPerView: 4,
//         },
//         992: {
//             slidesPerView: 5,
//         },
//         1200: {
//             slidesPerView: 6,
//         },
//     },
// });
// var swiper5 = new Swiper(".banner-1photo_slider .slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".banner-1photo_slider .slider .swiper-button-next",
//         prevEl: ".banner-1photo_slider .slider .swiper-button-prev",
//     },
// });
// var swiper6 = new Swiper(".banner-3photo_slider .slider", {
//     slidesPerView: 3,
//     spaceBetween: 12,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//         },
//         992: {
//             slidesPerView: 3,
//         },
//     },
// });


$('.booking .choose_week li').on('click', function () {
  $('.booking .choose_week li').removeClass('active');
  $(this).addClass('active');
  $('.booking .week').val($(this).text());
});
$('.booking .choose_hours li').on('click', function () {
  var count = $('.choose_week li.active').length;

  if (count > 0) {
    $('.booking .choose_hours li').removeClass('active');
    $(this).addClass('active');
    $('.booking .hour').val($(this).text());
  }
});
$('.booking button.btn').on('click', function (e) {
  var count_week = $('.choose_week li.active').length;
  var count_hours = $('.choose_hours li.active').length;

  if (count_week > 0 && count_hours > 0) {
    $('.booking .alert_form').text('');
    $('.booking button.submit').click();
  } else {
    $('.booking .alert_form').text('Vui lòng chọn lịch!');
  }
});
$(document).ready(function () {
  $(window).on('resize', function () {
    if ($(window).width() < 576) {
      $('.banner_slider-mobile .swiper-slide a').each(function () {
        var dataSrc = $(this).data('image-src');

        if (dataSrc) {
          var img = $(this).find('img');
          img.attr('src', dataSrc);
        }
      });
    }

    if ($(window).width() >= 576) {
      $('.banner_slider-pc .swiper-slide a').each(function () {
        var dataSrc = $(this).data('image-src');

        if (dataSrc) {
          var img = $(this).find('img');
          img.attr('src', dataSrc);
        }
      });
    }
  });
  $(window).trigger('resize');
  var contentHeight = $(".blog_list.blog_display_type .content").outerHeight();

  if (contentHeight >= 850) {
    $(".showMoreButton").show();
  } else {
    $(".showMoreButton").hide();
  }

  $(".showMoreButton").click(function () {
    $(this).parent().parent().find(".container.content").css("max-height", "none");
    $(this).parent().parent().find(".container.content").css("overflow", "visible");
    $(this).hide();
    $(this).siblings('.showHideButton').show();
  });
  $(".showHideButton").click(function () {
    $(this).parent().parent().find(".container.content").css("max-height", 850);
    $(this).parent().parent().find(".container.content").css("overflow", "hidden");
    $(this).hide();
    $(this).siblings('.showMoreButton').show();
  });
});
$(document).ready(function () {
  $(".draggable").on("mousedown", function (e) {
    $("body").addClass("dragging");
    var startX = e.pageX;
    $(document).on("mousemove", function (e) {
      var movementX = e.pageX - startX;

      if (movementX > 50) {
        $("#home_slider").carousel('prev');
        $(document).off("mousemove");
      } else if (movementX < -50) {
        $("#home_slider").carousel('next');
        $(document).off("mousemove");
      }
    });
    $(document).on("mouseup", function () {
      $("body").removeClass("dragging");
      $(document).off("mousemove");
    });
  });
  $(".draggable").on("dragstart", function (e) {
    e.preventDefault();
  });
}); // $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//       loop:true,
//       margin:10,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:1
//           },
//           1000:{
//               items:1
//           }
//       },
//       autoplay: false,
//       autoplayTimeout: 3000,
// 	  onInitialized: equalizeHeights,
//       dotsEach: true,
//         onInitialized: function() {
//             $('.owl-dot').each(function(index) {
//                 $(this).attr('id', 'owl-dot-' + (index + 1));
//                 $(this).attr('data-id', index + 1);
//                 $(this).attr('data-id', index + 1);
//             });
//         }
//     });
//
// 	function equalizeHeights(){
// 		$('.owl-item').css('height', '');
// 		var maxHeight = 0;
// 		$('.owl-item').each(function(){
// 		  var itemHeight = $(this).height();
// 		  if(itemHeight > maxHeight){
// 			maxHeight = itemHeight;
// 		  }
// 		});
// 		$('.owl-item').css('height', maxHeight + 'px');
// 	  }
// });

$(document).ready(function () {
  var count = $("#home_slider .carousel-item").length;

  if (count > 1) {
    $(".carousel-indicators.container").show();
  } else {
    $(".carousel-indicators.container").hide();
  }
});
$(document).ready(function () {
  $('.owl-dot').each(function () {
    var owlDotDataId = $(this).data('id');
    $('.image-logo-company').each(function () {
      var imageLogoDataId = $(this).data('id');
      var imageLogoSrc = $(this).attr('src');

      if (owlDotDataId === imageLogoDataId) {
        var cssRule = '#testimonial_slider .owl-carousel #owl-dot-' + imageLogoDataId + '::before { background-image: url("' + imageLogoSrc + '"); }';
        $("<style>").text(cssRule).appendTo("head");
      }
    });
  });
});
$(document).ready(function () {
  var maxHeight = 0;
  $('.owl-item').each(function () {
    var itemHeight = $(this).height();

    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }
  });
  $('.owl-item').css('height', maxHeight + 'px');
});
$(document).ready(function () {
  var isHidden = true;
  $('.show-search').click(function () {
    if (isHidden) {
      $(".sub-logo").slideUp("slow");
      $(".header-search").slideDown("slow");
      $(this).find('i.fa-search').fadeTo("fast", 0, function () {
        $(this).removeClass('fa-search').addClass('fa-x').fadeTo("fast", 1);
      });
    } else {
      $(".sub-logo").slideDown("slow");
      $(".header-search").slideUp("slow");
      $(this).find('i.fa-x').fadeTo("fast", 0, function () {
        $(this).removeClass('fa-x').addClass('fa-search').fadeTo("fast", 1);
      });
    }

    isHidden = !isHidden;
  });
});
$(document).ready(function () {
  //
  $('.btn-quote-and-promotion').on('click', function (e) {
    e.preventDefault();
    var product_id = $(this).data('id');
    var product_name = $(this).data('name');
    var product_image = $(this).data('image');

    if ($('#select_product_id option[value="' + product_id + '"]').length === 0 && product_name) {
      $('#select_product_id').append('<option value="' + product_id + '">' + product_name + '</option>');
      $('#select_product_id').val(product_id);
    }

    if (product_image) {
      $('#quote-and-promotion-product-image').attr('src', product_image);
    }

    $('#quoteAndPromotionModal').modal('show');
  });
  $("#quoteAndPromotionModal .close").on("click", function () {
    $('#quoteAndPromotionModal').modal('hide');
  });
});
$(document).ready(function () {// let col = $('.partner .owl-carousel').data('col') ? $('.partner .owl-carousel').data('col') : 6
  // $('.partner .owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: false,
  //     autoplay: true,
  //     autoplayTimeout: 2000,
  //     responsive: {
  //         0: {
  //             items: 2
  //         },
  //         600: {
  //             items: 3
  //         },
  //         1000: {
  //             items: col
  //         }
  //     }
  // });
  // $('.service_round_corner .owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 24,
  //     nav: false,
  //     autoplay: true,
  //     autoplayTimeout: 2000,
  //     responsive: {
  //         0: {
  //             items: 2
  //         },
  //         600: {
  //             items: 2
  //         },
  //         1000: {
  //             items: 5
  //         }
  //     }
  // });
});
$(document).ready(function () {
  $('.service_round_corner .owl-carousel .owl-dot').each(function () {
    $(this).attr('type', 'button');
    $(this).attr('aria-label', 'Page');
  });
}); // console.log(document.body.clientWidth);
// console.log(window.innerWidth);

if (document.body.clientWidth < 768) {
  $('.class-pc-banner').remove();
} else {
  $('.class-mb-banner').remove();
} // $(document).ready(function () {
//     $('#div-tin-4-chay-ngang').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         navText:["<div class='nav-btn prev-slide'><i class='fa fa-angle-left'></i></div>","<div class='nav-btn next-slide'><i class='fa fa-angle-right'></i></div>"],
//         autoplay: true,
//         autoplayTimeout: 2000,
//         dots: false,
//         responsive: {
//             0: {
//                 items: 2
//             },
//             600: {
//                 items: 2
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     });
// });


function getCurrentDomain() {
  var currentUrl = window.location.href;
  var url = new URL(currentUrl);
  var parts = url.hostname.split('.');

  if (parts.length >= 2) {
    return parts[parts.length - 2] + '.' + parts[parts.length - 1];
  } else {
    return url.hostname;
  }
}

function setCookie(key, value, expiry, domain) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000);
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';domain=.' + domain;
}

function googleTranslateElementInit() {
  var currentDomain = getCurrentDomain();
  setCookie('googtrans', "/vi/", 1, currentDomain);
  new google.translate.TranslateElement({
    pageLanguage: 'vi',
    layout: google.translate.TranslateElement.InlineLayout.VERTICAL
  }, 'google_translate_element');
}

function xemThemMenuDoc(e) {
  if ($(".li-xem-them").is(":visible")) {
    $(e).text('Xem thêm');
    $('.li-xem-them').toggle();
  } else {
    $(e).text('Thu nhỏ');
    $('.li-xem-them').toggle();
  }
}

window.onload = function () {
  googleTranslateElementInit();
};

$(document).ready(function () {
  $('Header .menu ul li .toggle_child').on('click', function () {
    $(this).siblings('ul.sub-menu').toggle();
  });
  $('.bar_toggle').on('click', function () {
    $('Header .menu').toggle();
  });
  $('.search_toggle').on('click', function () {
    $('Header .search').toggle();
  }); // Show or hide the scroll top button based on scroll position

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top-btn').fadeIn();
    } else {
      $('.scroll-top-btn').fadeOut();
    }
  }); // Scroll to the top when the button is clicked

  $('.scroll-top-btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;
  });
  $(".nav-item.dropdown").hover(function () {
    if ($(window).width() >= 991) {
      $(this).addClass("show");
      $(this).children(".dropdown-menu").addClass("show");
    }
  }, function () {
    if ($(window).width() >= 991) {
      $(this).removeClass("show");
      $(this).children(".dropdown-menu").removeClass("show");
    }
  });
  $(".navbar-toggler").on("click", function () {
    $(".overlay").toggleClass("active");
    $(".mobile-menu").toggleClass("active");
  });
  $(".overlay").on("click", function () {
    $(".overlay").removeClass("active");
    $(".mobile-menu").removeClass("active");
  });
  $(".dropdown .dropdown-menu").click(function (event) {
    event.stopPropagation();
  });
  $(".dropdown").click(function (event) {
    if ($(window).width() < 991) {
      event.preventDefault(); // $(this).siblings().removeClass("show");
      // $(this).siblings().find(".dropdown-menu").removeClass("show");
      // $(this).toggleClass("show");
      // $(this).children(".dropdown-menu").toggleClass("show");
    }
  });
  $('.btn-dang-nhap-user').on('click', function () {
    $('#loginModal').modal('show');
  });
  $("#btn-login").click(function () {
    var formStatus = $("#form-login").validate({
      rules: {
        account: "required",
        password: "required"
      },
      messages: {
        account: "Nhập tên đăng nhập.",
        password: "Nhập mật khẩu."
      },
      onfocusout: false,
      invalidHandler: function invalidHandler(form, validator) {
        var errors = validator.numberOfInvalids();

        if (errors) {
          validator.errorList[0].element.focus();
        }
      }
    }).form();

    if (true == formStatus) {
      popup_load_on();
      var form_data = new FormData($("#form-login")[0]);
      $.ajax({
        url: "dang-nhap-tai-khoan",
        data: form_data,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function success(result) {
          //console.log(result);
          popup_load_off();

          if (result.status == 'true') {
            $('.login-error').html("<p>".concat(result.message, "</p>"));
            var previousPage = window.location.href;

            if (previousPage) {
              window.location.href = previousPage;
            } else {
              window.location.href = "tai-khoan-cua-toi";
            }
          } else {
            $('.login-error').html("<p style=\"color: red\">".concat(result.message, "</p>"));
          }
        }
      });
    }
  });
  $("#loginModal .close").on("click", function () {
    $('#loginModal').modal('hide');
  });
  $('.image-link').on('click', function () {
    var imageSrc = $(this).data('image-src');
    $('#modalImage').attr('src', imageSrc);
    $('#imageModal').modal('show');
  }); //

  var header = $(".header-top");
  var headerHeight = header.outerHeight();
  var isFixed = false;
  $(window).scroll(function () {
    var currentScrollPos = $(window).scrollTop();

    if (currentScrollPos > 60 && currentScrollPos < headerHeight) {
      header.css('top', '-90px');
    }

    if (currentScrollPos > headerHeight && !isFixed) {
      header.removeClass('top').addClass('fixed');
      header.css('top', 0);
      isFixed = true;
    } else if (currentScrollPos <= headerHeight && isFixed) {
      header.removeClass('fixed').addClass('top');
      isFixed = false;
    }
  });
});