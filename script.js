$(function () {
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
});
