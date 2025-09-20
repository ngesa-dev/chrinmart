import { socialLinks } from "../constants";
import { FaFacebookF, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const iconMap = {
  FaFacebookF: FaFacebookF,
  FaWhatsapp: FaWhatsapp,
  FaXTwitter: FaXTwitter,
};

function Footer() {
  return (
    <footer className="bg-brand-purple text-brand-white text-center p-6 mt-6">
      <div className="flex justify-center space-x-6 mb-4">
        {socialLinks.map(({ name, url, icon }) => {
          const IconComponent = iconMap[icon];
          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow hover:opacity-80 transition text-xl"
              aria-label={name}
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
      <p className="text-sm text-brand-white/80">
        © {new Date().getFullYear()} Chrinmart Electricals. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
