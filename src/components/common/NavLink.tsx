import Link from "next/link";

interface NavLinkProps {
  number: string;
  name: string;
  href: string;
}

export default function NavLink({ name, number, href }: NavLinkProps) {
  return (
    <li className="w-full border-r-2 border-white border-opacity-0 px-4 lg:w-1/5 hover:border-opacity-50 lg:border-b-2 lg:border-r-0 lg:px-0 lg:py-4">
      <Link className="font-sans-cond text-2xl" href={href}>
        <span className="mr-4 font-bold">{number}</span>
        {name}
      </Link>
    </li>
  );
}
