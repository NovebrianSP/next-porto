import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTiktok, FaInstagram } from "react-icons/fa";

const medsos = [
  { icon: <FaGithub />, path: "https://github.com/NovebrianSP" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/novebrian-setya-purwanto-026717273/" },
  { icon: <FaTiktok />, path: "https://www.tiktok.com/@notvebrian?is_from_webapp=1&sender_device=pc" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/notvebrian/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {medsos.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
