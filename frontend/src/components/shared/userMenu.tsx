"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import {
  FiBell,
  FiSearch,
  FiMessageSquare,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { AnimatedListDemo } from "@/components/animatedListdemo";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const UserMenu = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchVisible, setSearchVisible] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
      document.body.className = storedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const toggleMessages = () => {
    setShowMessages((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (notificationRef.current &&
          !notificationRef.current.contains(event.target as Node)) ||
        (messageRef.current &&
          !messageRef.current.contains(event.target as Node))
      ) {
        setShowNotifications(false);
        setShowMessages(false);
        setSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative flex items-center p-4 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <div className="flex items-center hidden md:block">
        <Link href="/">
          <Image src="/logo.svg" alt="Site Logo" width={40} height={40} />
        </Link>
      </div>
      <div className="flex-grow flex justify-center">
        <div className="relative flex items-center ml-4 md:ml-0">
          <FiSearch
            className={`absolute left-3 ${
              theme === "light" ? "text-black" : "text-gray-400"
            }`}
            onClick={toggleSearch}
          />
          <Input
            className={`p-2 pl-10 rounded-full w-20 md:w-64 border-none ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            } ${searchVisible ? "block" : "hidden md:block"}`}
            placeholder="Digite para pesquisar..."
          />
        </div>
      </div>

      <div className="flex items-center ml-8">
        <Button
          onClick={toggleTheme}
          className="relative mr-2 h-12 w-12 flex items-center justify-center border-none bg-transparent hover:bg-transparent"
        >
          {theme === "light" ? (
            <FiMoon className="text-2xl text-black" />
          ) : (
            <FiSun className="text-2xl text-white" />
          )}
        </Button>

        <Button
          onClick={toggleNotifications}
          className="relative mr-2 h-12 w-12 flex items-center justify-center border-none bg-transparent rounded-full"
        >
          <FiBell
            className={`text-2xl ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>

        <Button
          onClick={toggleMessages}
          className="relative mr-4 h-12 w-12 flex items-center justify-center border-none bg-transparent rounded-full"
        >
          <FiMessageSquare
            className={`text-2xl ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </Button>

        <div className="hidden md:flex flex-col items-end text-right mr-4">
          <span className="block text-sm font-medium">John Doe</span>
          <span
            className={`block text-xs ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Psicólogo
          </span>
        </div>
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      {showNotifications && (
        <div
          ref={notificationRef}
          className={`absolute right-0 top-full mt-2 w-[400px] ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          } p-4 rounded-lg shadow-lg z-10`}
        >
          <AnimatedListDemo />
        </div>
      )}

      {showMessages && (
        <div
          ref={messageRef}
          className={`absolute right-14 top-full mt-2 w-[300px] ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          } p-4 rounded-lg shadow-lg z-10`}
        >
          <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
            Você tem uma nova mensagem!
          </p>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
