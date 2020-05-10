$(".js-hamburger-menu").click(function(e) {
  $("body").toggleClass("hamburger-show hamburger-hide");
});

if ($(window).width() < 960) {
  $(".main").removeClass("animation");
} else {
  $(".main").addClass("animation");
}

gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".paper-plane", {
  duration: 1,
  ease: "power1.ease",
  motionPath: {
    path: [
      { x: 100, y: -20 },
      { x: 300, y: 10 },
      { x: 500, y: 100 },
      { x: 750, y: -100 },
      { x: 350, y: -50 },
      { x: 600, y: 100 },
      { x: 800, y: 0 },
      { x: window.innerWidth, y: -250 }
    ], // you probably want more points here...or just use an SVG <path>!
    curviness: 1.25,
    autoRotate: false
  }
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000,
  triggerHook: 0
})
  .setTween(tween)
  //.addIndicators()
  .setPin(".animation")
  .addTo(controller);
