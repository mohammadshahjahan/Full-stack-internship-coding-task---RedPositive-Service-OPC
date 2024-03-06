"use client";

import useOpenModal from "@/app/_store/useOpenModal";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Table from "./Table";
import useEditModal from "@/app/_store/useEditModal";
import EditModal from "./EditModal";

const HomePage = () => {
  const modal = useOpenModal();
  const { id, isOpen, onClose } = useEditModal();
  return (
    <div className="">
      <div className="pt-40  bg-slate-100">
        <Navbar />
        <Modal isOpen={modal.isOpen} onClose={modal.onClose} />
        <EditModal id={id} isOpen={isOpen} onClose={onClose} />
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
