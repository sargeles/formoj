$(function () {
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
  }
  $("body").on("click", ".content-icon", function () {
    let doc = $('.content-icon')[0];
    if (doc.classList.contains('icon-rotate')) {
      doc.classList.remove('icon-rotate');
      $(".content-des").slideUp();
    } else {
      doc.classList.add('icon-rotate');
      $(".content-des").slideDown();
    }
  });

  $('body').on('mouseenter', '.bottom-bg-2', function (event) {//绑定鼠标进入事件
    $(".bottom-alt").show();
  });
  $('body').on('mouseleave', '.bottom-bg-2', function () {//绑定鼠标划出事件
    $(".bottom-alt").hide();
  });

  var path = window.location.pathname;
  if (path === "/") {
    $("#topbar-home").addClass('selected');
  }
  if (path.indexOf('about') != -1) {
    $("#topbar-about").addClass('selected');
  }
});