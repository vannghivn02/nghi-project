"use strict";

$(document).ready(function () {
  $('.btn-consult').on('click', function () {
    $('#consultModal').modal('show');
  });
  $("#consultModal .close").on("click", function () {
    $('#consultModal').modal('hide');
  });
  $("#btn-consult").click(function () {
    var formStatus = $("#form-contact-modal").validate({
      rules: {
        name: "required",
        phone: "required"
      },
      messages: {
        name: "Enter your name.",
        phone: "Enter your phone number."
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
      var form_data = new FormData($("#form-contact-modal")[0]);
      $.ajax({
        url: "/lien-he/gui",
        data: form_data,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function success(result) {
          popup_load_off();

          if (result.status == 'true') {
            $('#consultModal').modal('hide');
            $('#consultModalSuccess').modal('show');
            $('#form-contact-modal').trigger("reset");
          } else {
            $('.contact-error').html("<p style=\"color: red\">".concat(result.message, "</p>"));
          }
        }
      });
    }
  }); // load more description-content

  $(".tab-pane .more").each(function () {
    var content = $(this).siblings(".content");
    var maxHeight = parseInt(content.css("max-height"));

    if (content.height() >= maxHeight - 12) {
      $(this).show();
    }
  });
  $("#myTab li.nav-item").on("click", function () {
    var id = $(this).children("button").data("bs-target");
    var content = $(id).children('.content');
    var maxHeight = parseInt(content.css("max-height"));
    setTimeout(function () {
      if (content.height() >= maxHeight - 12) {
        $(content).siblings(".more").show();
      }
    }, 200);
  });
  $(".read-more-btn").click(function () {
    $(this).parent().toggleClass("expanded");
  }); // add to cart

  $('.add_to_cart').on('click', function () {
    $('#add_to_cart').submit();
  }); // slide show

  $('.brandSwiper').slick({
    slidesToShow: 6,
    infinite: true,
    arrows: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 960,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 540,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  var numSlick = 0;
  $('.row.product_list').each(function () {
    numSlick++;
    $(this).addClass('slider-' + numSlick).slick({
      slidesToShow: 4,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      arrows: true,
      responsive: [, {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 540,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  });
  $('.main-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    asNavFor: '.swiper-container-thumbs'
  });
  $('.main-slider').slickLightbox({
    itemSelector: 'a',
    navigateByKeyboard: true
  });
  $('.swiper-container-thumbs').slick({
    slidesToShow: 5,
    arrows: false,
    asNavFor: '.main-slider',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 960,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  }); // dánh giá

  $("#starRating.star i").click(function () {
    var clickedIndex = $(this).data("index");
    $("#starRating.star i").each(function (index) {
      if (index + 1 <= clickedIndex) {
        $(this).removeClass("fa-regular").addClass("fa-solid");
      } else {
        $(this).removeClass("fa-solid").addClass("fa-regular");
      }
    });
    $("#starRating input[name=\"star\"]").val(clickedIndex);
  });
  $("#actual-btn").on("change", function (e) {
    var input = e.target;

    if (input.files && input.files.length > 0) {
      (function () {
        var imagePreview = $(".up-image .list-preview");
        imagePreview.empty();

        for (var i = 0; i < input.files.length; i++) {
          var reader = new FileReader();

          reader.onload = function (e) {
            var img = "<div class=\"image-preview\"><img src=\"".concat(e.target.result, "\"></div>");
            imagePreview.append(img);
          };

          reader.readAsDataURL(input.files[i]);
        }
      })();
    }
  });
});