"use client";

import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import useOpenModal from "./_store/useOpenModal";
import Table from "@/components/Table";

export default function Home() {
  const modal = useOpenModal();
  return (
    <div className="">
      <div className="pt-40 pb-20 bg-slate-100">
        <Navbar />
        <Modal isOpen={modal.isOpen} onClose={modal.onClose} />
        <Table />
      </div>
    </div>
  );
}
