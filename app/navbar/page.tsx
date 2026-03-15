import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiHappycow } from "react-icons/si";
export default function NavBar() {
  const navItems = [
    { id: 2, offer: "Service", path: "#Service" },
    { id: 3, offer: "Contact", path: "#" },
    { id: 4, offer: "About-Us", path: "#" },
  ];
  return (
    <nav className="bg-green-700 w-full p-4 fixed flex justify-around items-center">
      <Link
        href={"/"}
        className=" flex items-center gap-1 font-bold text-amber-500"
      >
        <SiHappycow size={24} color="black" />
        TaskApp
      </Link>
      <div className="font-bold flex gap-5">
        {navItems.map((navItem) => (
          <Link
            href={navItem.path}
            key={navItem.id}
            className=" font-bold flex justify-around"
          >
            {navItem.offer}
          </Link>
        ))}
      </div>
      <Button>
        <Link href={"/login"}>Get started</Link>
      </Button>
    </nav>
  );
}
