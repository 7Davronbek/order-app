gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".wrap",
    { background: "transparent" },
    {
      background: "blue",
      color: "white",
      scrollTrigger: {
        end: "800",
        scrub: true,
        trigger: ".wrap",
      },
    }
  );

  gsap.fromTo(
    "#headerShape",
    { y: 0, x: 0, opacity: 1 },
    {
      y: 100,
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#headerCol",
        scrub: true,
        start: "top",
      },
    }
  );

  gsap.fromTo(
    "#headerBtn",
    { y: 0, x: 0, opacity: 1 },
    {
      y: 90,
      x: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: "#headerCol",
        scrub: true,
        start: "top",
      },
    }
  );

  gsap.fromTo(
    "#headerP",
    { y: 0, x: 0, opacity: 1 },
    {
      y: 50,
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: "#headerCol",
        scrub: true,
        start: "top",
      },
    }
  );

  gsap.fromTo(
    "#headerBottom",
    { y: 0, x: 0, opacity: 1 },
    {
      y: 20,
      x: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#headerCol",
        scrub: true,
        start: "center",
      },
    }
  );

  gsap.fromTo(
    "#headerH1Left",
    { y: 0, x: 0, opacity: 1 },
    {
      y: 0,
      x: 100,
      opacity: 1,
      scrollTrigger: {
        trigger: "#headerBottom",
        scrub: true,
        end: "top",
      },
    }
  );

  gsap.fromTo(
    "#headerH1Right",
    { y: 0, x: 0, opacity: 1 },
    {
      y: 0,
      x: -200,
      opacity: 1,
      scrollTrigger: {
        trigger: "#headerBottom",
        scrub: true,
        end: "top",
      },
    }
  );

  // let itemsL = gsap.utils.toArray(".left");

  // itemsL.forEach((item) => {
  //   gsap.fromTo(
  //     item,
  //     { opacity: 0.3, x: -100 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       scrollTrigger: {
  //         trigger: item,
  //         scrub: true,
  //       },
  //     }
  //   );
  // });

  // let itemsR = gsap.utils.toArray(".right");

  // itemsR.forEach((item) => {
  //   gsap.fromTo(
  //     item,
  //     { opacity: 0.3, y: 100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: item,
  //         scrub: true,
  //       },
  //     }
  //   );
  // });

  // gsap.fromTo(
  //   ".mySecondDiv",
  //   { x: 100 },
  //   {
  //     x: -100,
  //     scrollTrigger: {
  //       trigger: ".mySecondDiv",
  //       scrub: true,
  //     },
  //   }
  // );
}

function displayCurrentTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var formattedTime = hours + ":" + minutes + ":" + seconds;

  document.getElementById("current_time").innerHTML = formattedTime;
}

setInterval(displayCurrentTime, 1000);

let cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
  });
});

const open = document.querySelector(".myContainer");
const burger = document.querySelector(".mobileWrap")

open.addEventListener("click", () => {
  burger.classList.toggle("active");
  open.classList.toggle("active");
})

// const sectionColors = ["white", "black", "white2", "black2"];
// const navColor = ["#fff", "#000", "#fff", "#000"];

// gsap.set(".fullscreen", { backgroundColor: gsap.utils.wrap(sectionColors) });
// const sections = gsap.utils.toArray(".fullscreen");

// sections.forEach(function (section, index) {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top 100px",
//     end: "bottom 100px",
//     animation: gsap.to(".myNavbar", {
//       backgroundColor: navColor[index],
//       immediateRender: false,
//     }),
//     toggleActions: "restart none none reverse",
//   });
// });
