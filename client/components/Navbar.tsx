"use client";

import useOpenModal from "@/app/_store/useOpenModal";
import { IoIosAddCircleOutline } from "react-icons/io";

const Navbar = () => {
  const modal = useOpenModal();
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center bg-gradient-to-r from-lime-600 to-green-600 text-white">
      <div
        className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-end "
        onClick={modal.onOpen}
      >
        <IoIosAddCircleOutline className="" />
        <span>Add User</span>
      </div>
    </div>
  );
};

export default Navbar;
