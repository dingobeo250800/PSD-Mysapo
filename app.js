
// <!-- sideBar -->
$(document).ready(function () {
    $('.slideToggle-icon').click(function () {
        $(this).next('.side-bar ul li ul').slideToggle();
        $(this).find('i').toggleClass('rotate');
    });

    $('.mobile-menu').click(function () {
        $('.side-bar').addClass('active');
        $('.close-btn').addClass('close-btn-show');
        $('.mobile-menu').css("visibility", "hidden");
    });

    $('.close-btn').click(function () {
        $('.active').removeClass("active");
        $('.close-btn-show').removeClass("close-btn-show");
        $('.mobile-menu').css("visibility", "visible");
    })
});

// thêm dấu + ở phan ul,li trong Footer
$(document).ready(function () {
    $('.opent-toggle').click(function () {
        $(this).next('.footer-introduceToggle ul').slideToggle();
        if ($('.addRemove-icon').hasClass('show')) {
            $('.addRemove-icon').removeClass('show');
        } else {
            $('.addRemove-icon').addClass('show');
        }
    });
});

// đây là click nó lưu lại cái li ở navBar
$(document).ready(function () {
    $('.navBar-main .navBar ul li').click(function () {
        $('ul li').removeClass("current-menu-item");
        $(this).addClass("current-menu-item");
    });
});

// backTop
$(document).ready(function () {
    $('.backTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});


//CodePen Home Back to Top Button

var btnBack = $('#item__btn-back');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnBack.addClass('show');
  } else {
    btnBack.removeClass('show');
  }
});

btnBack.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

