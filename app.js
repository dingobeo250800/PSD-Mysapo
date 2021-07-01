
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

$(document).ready(function () {
    $('.navBar-main .navBar ul li').click(function () {
        $('ul li').removeClass("current-menu-item");
        $(this).addClass("current-menu-item");
    });
});


$(document).ready(function () {
    $('.backTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});