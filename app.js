const tl = gsap.timeline({ defualt: { duration: 0.75, ease: "Power3.out" } });

gsap.fromTo(".container", { scale: 1 }, { scale: 1.4 });

// Home Button animation
const notification = document.querySelector(".notification");
const home = document.querySelector(".home");
const message = document.querySelector(".message");

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
home.addEventListener("click", () => {
  gsap.fromTo(
    ".home-svg",
    { scale: 1 },
    { scale: 0.8, yoyo: true, repeat: 1, ease: "Back.easeOut.config(1)" }
  );

  gsap.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.4, stagger: 0.2, duration: 1 }
  );
  gsap.fromTo(
    ".left-feather",
    { x: 0, y: -5, scale: 0 },
    { x: 12, y: 20, scale: 1.4, stagger: 0.2, duration: 1 }
  );
});

//Notification button animation
gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom center" });

notification.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotate: -5 },
    { rotate: 0, duration: 2, ease: "elastic.out(5,0.2)" }
  );
  gsap.fromTo(
    ".ringer",
    { rotate: -3, x: 0.5 },
    { rotate: 0, duration: 2, x: 0, ease: "elastic.out(5,0.2)" }
  );

  gsap.fromTo(
    ".wave",
    { scale: 0, opacity: 1 },
    { scale: 1.5, opacity: 0, duration: 1 }
  );
});

//Message button animation
gsap.set(".flap", { transformOrigin: "top center" });

message.addEventListener("click", () => {
  tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });
  tl.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  tl.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%");
  tl.fromTo(
    ".note",
    { y: 0, opacity: 1 },
    { y: -40, opacity: 0, duration: 0.75 }
  );
  tl.to(".flap", { scale: 1 }, "<50%");
});
