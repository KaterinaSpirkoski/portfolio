import Link from "next/link";

const NavLink = ({ href, title }: any) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:border-b hover:border-red-500"
    >
      {title}
    </Link>
  );
};
export default NavLink;
