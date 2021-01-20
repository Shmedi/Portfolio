const shmedi = {};

const textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3250,
    delay: (el, i) => 150 * (i+1)
  });

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
      const objectBottom =
        $(this).offset().top + $(".imgContainer").outerHeight();

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
