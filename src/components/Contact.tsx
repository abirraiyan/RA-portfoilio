import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:raiyan.abir@gmail.com" data-cursor="disable">
                raiyan.abir@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+8801903416587" data-cursor="disable">
                +8801903416587
              </a>
            </p>
            <h4>Education</h4>
            <p>BSc in Computer Science</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mohammad Harun-Ur Raiyan</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
        <div className="contact-footer-nav">
          <a
            href="https://github.com/abirraiyan"
            target="_blank"
            data-cursor="disable"
            className="contact-social"
          >
            <FaGithub /> Github <MdArrowOutward />
          </a>
          <a
            href="https://www.linkedin.com/in/md-harun-ur-raiyan-abir-4a2507257/"
            target="_blank"
            data-cursor="disable"
            className="contact-social"
          >
            <FaLinkedinIn /> Linkedin <MdArrowOutward />
          </a>
          <a
            href="https://www.facebook.com/raiyan.abir.9/"
            target="_blank"
            data-cursor="disable"
            className="contact-social"
          >
            <FaFacebook /> Facebook <MdArrowOutward />
          </a>
          <a
            href="https://www.instagram.com/abi_abiosis_?igsh=N3dyZjhuaW5zM202&utm_source=qr"
            target="_blank"
            data-cursor="disable"
            className="contact-social"
          >
            <FaInstagram /> Instagram <MdArrowOutward />
          </a>
          <a
            href="https://www.fiverr.com/s/ljemyWR"
            target="_blank"
            data-cursor="disable"
            className="contact-social"
          >
            <SiFiverr /> Fiverr <MdArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
