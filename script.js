function init() {gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});
}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y  + "px";
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h2",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 2,
  }
});
tl.to(".page1 h2",{
  x: -100,
},"anim")
tl.to(".page1 h1", {
   x: 100,
}, "anim")
tl.to(".page1 #im", {
  width: "90%",
}, "anim")
  
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h2",
    scroller: ".main",
    start: "top -127%",
    end: "top -130",
    scrub: 3,
  }
});
var p2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2 h1",
    scroller: ".main",
    start: "top 10%",
    end: "top 60%",
    scrub:2,
  },
});
p2.to(".page2 h1", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  stagger:0.2
})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2 h1",
    scroller: ".main",
    start: "top 10%",
    end: "top 27%",
    scrub: 3,
  },
});

tl2.to(".main", { 
  backgroundColor:"#fff"
})

tl3.to(".page2 h2", {
  y: -80,
}, "tab");
