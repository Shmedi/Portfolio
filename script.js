$(window).on("load", () => {
  $(".loaderWrapper").fadeOut("slow");
});

document
  .getElementById("year")
  .appendChild(document.createTextNode(new Date().getFullYear()));

const shmedi = {};

const textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

window.onload = () => {
  document.body.classList.add("ready");

  anime.timeline({ loop: false }).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 150 * (i + 1),
  });
};

shmedi.navClick = () => {
  $(document).on("click", 'a[href^="#"]', () => {
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
  $(window).scroll(() => {
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

$(() => {
  shmedi.navClick();
  shmedi.objectFade();
});
