import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTiktok, FaInstagram } from "react-icons/fa";

const medsos = [
  { icon: <FaGithub />, path: "https://github.com/NovebrianSP" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTiktok />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {medsos.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
