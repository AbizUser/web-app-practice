import Link from "next/link";

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  label, link , icon
}) => {
  return (
    <Link href={link}>
      <div>{icon}</div>
      <div>{label}</div>
    </Link>
  )
}

export default NavItem
