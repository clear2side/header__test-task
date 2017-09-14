(function () {

  $('.header__hidden-menu--item').first().addClass('active');
  $('.header__hidden-menu--item').on('click', function () {
    $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
  });

})();
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2R1bGVzL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJCgnLmhlYWRlcl9faGlkZGVuLW1lbnUtLWl0ZW0nKS5maXJzdCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcuaGVhZGVyX19oaWRkZW4tbWVudS0taXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICR0aGlzID0gJCh0aGlzKTtcclxuICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbn0pKCk7IiwiJCgnLm9uZS10aW1lJykuc2xpY2soe1xyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc3BlZWQ6IDMwMCxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
