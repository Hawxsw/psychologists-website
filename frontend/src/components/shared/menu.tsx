"use client";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import {
  FiHome,
  FiUser,
  FiUsers,
  FiClipboard,
  FiSettings,
  FiLogOut,
  FiMessageCircle,
  FiDownload,
} from "react-icons/fi";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu = ({ isOpen, toggleMenu }: MenuProps) => {
  return (
    <div className="relative">
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>

      <div
        className={`absolute top-0 left-0 h-full shadow-lg rounded-lg
          transform transition-transform ease-out duration-300 ${
            isOpen ? "block" : "hidden md:block"
          }`}
      >
        <ul className="p-4 space-y-4 text-black dark:text-white">
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiHome className="w-6 h-6 mr-2" />
            <Link href="/" className="flex-1">
              Dashboard
            </Link>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiUsers className="w-6 h-6 mr-2" />
            <Link href="/registro" className="flex-1">
              Register Psicólogos
            </Link>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiUser className="w-6 h-6 mr-2" />
            <Link href="/cliente-Lista" className="flex-1">
              Lista Clientes
            </Link>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiClipboard className="w-6 h-6 mr-2" />
            <Link href="/" className="flex-1">
              Agendamentos
            </Link>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiSettings className="w-6 h-6 mr-2" />
            <Link href="/" className="flex-1">
              Conta
            </Link>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiLogOut className="w-6 h-6 mr-2" />
            <Link href="/" className="flex-1">
              Sair
            </Link>
          </li>

          <li className="font-bold text-sm uppercase tracking-wide mt-6 mb-4">
            Contatos
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiMessageCircle className="w-6 h-6 mr-2" />
            <Link href="/" className="flex-1">
              Mensagens
            </Link>
          </li>
          <li className="flex items-center py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <FiDownload className="w-6 h-6 mr-2" />
            <Link href="/" className="flex-1">
              Downloads
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
