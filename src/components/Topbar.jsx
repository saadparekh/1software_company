import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-[#1f1f1f] text-gray-300 text-sm py-2 px-10 flex justify-between">

      <div className="flex gap-6">

        <a href="tel:+923311234567" className="hover:text-white">
          📞 0331-1234567
        </a>

        <a href="mailto:info@mastek.tech" className="hover:text-white">
          ✉️ themastek.co@gmail.com
        </a>

      </div>

      <div className="flex gap-4">

        <a
          href="https://www.facebook.com/profile.php?id=61586228103473"
          target="_blank"
          className="hover:text-white"
        >
          <Facebook size={16} />
        </a>

        <a
          href="https://www.linkedin.com/in/mastek-innovations-3691533b5/"
          target="_blank"
          className="hover:text-white"
        >
          <Linkedin size={16} />
        </a>

        <a
          href="https://www.instagram.com/mastekinnovations/"
          target="_blank"
          className="hover:text-white"
        >
          <Instagram size={16} />
        </a>

      </div>
    </div>
  );
}