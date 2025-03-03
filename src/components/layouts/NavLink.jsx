import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@/app/assets/icons/facebook-circle.svg";
import TwitterXIcon from "@/app/assets/icons/twitter-x.svg";
import YoutubeIcon from "@/app/assets/icons/youtube-fill.svg";
import InstagramIcon from "@/app/assets/icons/instagram-fill.svg";

const NavLink = ({ href, title }) => {
  return (
    <>
      <Link href={href}>
        <a className="block py-2 pl-3 pr-4 text-black text-xl font-semibold rounded md:p-0 hover:text-black">
          {title}
        </a>
      </Link>
      <div className="flex gap-6 text-xl justify-center items-center py-2 text-brand-secondary">
        <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
        <Image src={TwitterXIcon} alt="TwitterX" width={24} height={24} />
        <Image src={YoutubeIcon} alt="YouTube" width={24} height={24} />
        <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
      </div>
    </>
  );
};

export default NavLink;
