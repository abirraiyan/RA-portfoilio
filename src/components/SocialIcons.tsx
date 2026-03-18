import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import "./styles/SocialIcons.css";
import { useEffect } from "react";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const initialRect = elem.getBoundingClientRect();
      let mouseX = initialRect.width / 2 || 25;
      let mouseY = initialRect.height / 2 || 25;
      let currentX = 25;
      let currentY = 25;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/abirraiyan" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/md-harun-ur-raiyan-abir-4a2507257/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/raiyan.abir.9/" target="_blank">
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/abi_abiosis_?igsh=N3dyZjhuaW5zM202&utm_source=qr" target="_blank">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="https://www.fiverr.com/s/ljemyWR" target="_blank">
            <SiFiverr />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialIcons;
