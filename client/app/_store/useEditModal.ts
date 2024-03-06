import { create } from "zustand";

interface OpenModalStore {
  isOpen: boolean;
  id: string;
  onOpen: () => void;
  onClose: () => void;
  setId: (e: string) => void;
}

const useEditModal = create<OpenModalStore>((set) => ({
  isOpen: false,
  id: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setId: (e: string) => set({ id: e }),
}));

export default useEditModal;
