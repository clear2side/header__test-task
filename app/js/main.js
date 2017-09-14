(function () {

  $('.header__hidden-menu--item').first().addClass('active');
  $('.header__hidden-menu--item').on('click', function () {
    $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
  });

})();