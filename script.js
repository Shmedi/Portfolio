const shmedi = {};

shmedi.navClick = () => {
  $(document).on("click", 'a[href^="#"]', function () {
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        300,
        "linear"
      );
  });
};

shmedi.objectFade = () => {
  $(window).scroll(function () {
    const windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".projectItem").each(function () {
      const objectBottom = $(this).offset().top + $(this).outerHeight();

      if (objectBottom < windowBottom) {
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      } else {
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  });
};

$(function () {
  shmedi.navClick();
  shmedi.objectFade();
});
