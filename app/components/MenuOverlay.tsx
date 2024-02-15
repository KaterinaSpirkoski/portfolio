import NavLink from "./NavLink";

const MenuOverlay = ({ links }: any) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links &&
        links.map((link: any, index: any) => (
          <NavLink href={link.path} title={link.title} key={link.title} />
        ))}
    </ul>
  );
};
export default MenuOverlay;
