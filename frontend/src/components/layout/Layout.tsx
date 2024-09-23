"use client";
import Menu from "@/components/shared/menu";
import UserMenu from "@/components/shared/userMenu";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full">
        <UserMenu />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div
          className={`${
            isMenuOpen ? "w-64" : "w-0"
          } md:w-64 transition-all duration-300 dark:bg-gray-800 bg-white dark:text-white text-black overflow-auto`}
        >
          <Menu
            isOpen={isMenuOpen}
            toggleMenu={() => setMenuOpen(!isMenuOpen)}
          />
        </div>

        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
