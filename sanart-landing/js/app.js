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
