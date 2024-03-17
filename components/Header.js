"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [navItems, setNavItems] = useState([
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Category", path: "/category" },
    { id: 3, title: "Store", path: "/store" },
  ]);

  return (
    <header className="py-3 flex items-center justify-between">
      <div>
        <Link href={"/"} className="font-bold text-2xl">
          Shopping Card
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <Link
                href={navItem.path}
                className="font-medium text-[20px] hover:text-slate-400 transition"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
