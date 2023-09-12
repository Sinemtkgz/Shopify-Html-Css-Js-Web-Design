document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(".content", { origin: "right" });
  sr.reveal(".image", { origin: "left" });
  sr.reveal(" .nav-list, .logo", { origin: "top" });
});
