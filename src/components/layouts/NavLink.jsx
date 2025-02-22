import Link from "next/link";
import FacebookIcon from "@/icons/facebook-circle.svg";
import TwitterXIcon from "@/icons/twitter-x.svg";
import YoutubeIcon from "@/icons/youtube-fill.svg";
import InstagramIcon from "@/icons/instagram-fill.svg";

const NavLink = ({ href, title }) => {
  return (
    <>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-black text-xl font-semibold rounded md:p-0 hover:text-black"
      >
        {title}
      </Link>
      <div className="flex gap-6 text-xl justify-center items-center py-2 text-brand-secondary">
        <FacebookIcon />
        <TwitterXIcon />
        <YoutubeIcon />
        <InstagramIcon />
      </div>
    </>
  );
};

export default NavLink;
