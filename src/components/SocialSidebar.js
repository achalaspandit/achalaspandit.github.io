import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/achalapandit/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/achalaspandit",
    label: "GitHub",
  },
  {
    icon: <SiLeetcode />,
    href: "https://leetcode.com/u/achalaspandit/",
    label: "LeetCode",
  },
  {
    icon: <HiOutlineMail />,
    href: "mailto:achala.s.pandit@gmail.com",
    label: "Email",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/pixeldaybook/",
    label: "Instagram",
  },
];

function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/4 z-50 flex flex-col items-center space-y-4">
      {socialLinks.map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-primary dark:text-green-100 hover:text-accent transition text-2xl p-2 rounded-full bg-green-100 dark:bg-primary shadow hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialSidebar;