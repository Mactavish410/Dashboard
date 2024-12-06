import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaVk,
  FaYoutube,
  FaFacebook,
  FaSteam,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTwitch,
  FaStackOverflow,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaSnapchat,
  FaWhatsapp,
  FaViber,
  FaMeetup,
  FaSoundcloud,
  FaBandcamp,
  FaVimeo,
  FaDailymotion,
  FaTumblr,
  FaMedium,
  FaPatreon,
  FaBlogger,
  FaQuora,
  FaWeibo,
  FaLine,
} from "react-icons/fa";
import styles from "./Social.module.scss";

const SOCIAL_LINKS = [
  { href: "https://web.telegram.org/", icon: <FaTelegramPlane /> },
  { href: "https://www.instagram.com/", icon: <FaInstagram /> },
  { href: "https://twitter.com/", icon: <FaTwitter /> },
  { href: "https://vk.com/", icon: <FaVk /> },
  { href: "https://www.youtube.com/", icon: <FaYoutube /> },
  { href: "https://www.facebook.com/", icon: <FaFacebook /> },
  { href: "https://store.steampowered.com/", icon: <FaSteam /> },
  { href: "https://discord.com/", icon: <FaDiscord /> },
  { href: "https://www.reddit.com/", icon: <FaReddit /> },
  { href: "https://github.com/", icon: <FaGithub /> },
  { href: "https://www.twitch.tv/", icon: <FaTwitch /> },
  { href: "https://stackoverflow.com/", icon: <FaStackOverflow /> },
  { href: "https://www.linkedin.com/", icon: <FaLinkedinIn /> },
  { href: "https://www.pinterest.com/", icon: <FaPinterest /> },
  { href: "https://www.tiktok.com/", icon: <FaTiktok /> },
  { href: "https://www.snapchat.com/", icon: <FaSnapchat /> },
  { href: "https://www.whatsapp.com/", icon: <FaWhatsapp /> },
  { href: "https://www.viber.com/ru/", icon: <FaViber /> },
  { href: "https://www.meetup.com/", icon: <FaMeetup /> },
  { href: "https://www.soundcloud.com/", icon: <FaSoundcloud /> },
  { href: "https://www.bandcamp.com/", icon: <FaBandcamp /> },
  { href: "https://www.vimeo.com/", icon: <FaVimeo /> },
  { href: "https://www.dailymotion.com/", icon: <FaDailymotion /> },
  { href: "https://www.tumblr.com/", icon: <FaTumblr /> },
  { href: "https://www.medium.com/", icon: <FaMedium /> },
  { href: "https://www.patreon.com/", icon: <FaPatreon /> },
  { href: "https://www.blogger.com/", icon: <FaBlogger /> },
  { href: "https://www.quora.com/", icon: <FaQuora /> },
  { href: "https://www.weibo.com/", icon: <FaWeibo /> },
  { href: "https://line.me/", icon: <FaLine /> },
];

const Social = () => {
  return (
    <div className={styles.social_main}>
      {SOCIAL_LINKS.map((link, index) => (
        <a
          key={index}
          target="_blank"
          href={link.href}
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
