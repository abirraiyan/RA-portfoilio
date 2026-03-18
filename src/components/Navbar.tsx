import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          RA
        </a>
        <a
          href="mailto:raiyan.abir@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          raiyan.abir@gmail.com
        </a>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li onClick={() => setIsOpen(false)}>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li className="mobile-email" onClick={() => setIsOpen(false)}>
            <a href="mailto:raiyan.abir@gmail.com" data-cursor="disable">
              raiyan.abir@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
