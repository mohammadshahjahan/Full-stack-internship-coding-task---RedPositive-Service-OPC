"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);

  const hobbyHandler = (hobbies: String) => {
    const newHobbyArray = hobbies.split(",");
    setHobbies(newHobbyArray);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = useCallback(async () => {
    // Validate fields
    let isValid = true;
    if (!name) {
      alert("Name is required");
      isValid = false;
    }
    if (!phone) {
      alert("Phone number is required");
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      alert("Email is required");
      isValid = false;
    }
    if (!hobbies.length) {
      alert("Hobbies are required");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post(
        "https://full-stack-internship-coding-task.onrender.com/person/addPerson",
        {
          name,
          phoneNumber: phone,
          email,
          hobbies,
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setEmail("");
      setHobbies([]);
      setName("");
      setPhone("");
    }
  }, [name, email, hobbies, phone]);

  if (!isOpen) {
    return null;
  }

  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
        "
      >
        <div className="relative w-full lg:w-3/6 my-6 mx-auto  h-full ">
          {/* Content is here !*/}
          <div
            className="
            
            
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-slate-100
            outline-none 
            focus:outline-none
            "
          >
            {/* Content header !*/}
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold ">
                Fill up the new user details
              </h3>
              <button
                className="
                  p-1 
                  ml-auto
                  border-0 
                  hover:opacity-70
                  transition
                "
                onClick={handleClose}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <label className="p-4">Name : </label>
                <input
                  type="text"
                  placeholder="name"
                  className="
                            w-48
                            p-4 
                            text-lg 
                            bg-black 
                            border-2
                            border-neutral-800 
                            rounded-md
                            outline-none
                            text-white
                            focus:border-sky-500
                            focus:border-2
                            transition
                            disabled:bg-neutral-900
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                        "
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="">
                <label className="p-4">Phone : </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="
                            w-48
                            p-4 
                            text-lg 
                            bg-black 
                            border-2
                            border-neutral-800 
                            rounded-md
                            outline-none
                            text-white
                            focus:border-sky-500
                            focus:border-2
                            transition
                            disabled:bg-neutral-900
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                        "
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="">
                <label className="p-4">Email : </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="
                            w-48
                            p-4 
                            text-lg 
                            bg-black 
                            border-2
                            border-neutral-800 
                            rounded-md
                            outline-none
                            text-white
                            focus:border-sky-500
                            focus:border-2
                            transition
                            disabled:bg-neutral-900
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                        "
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <input
                placeholder="Hobbies  e.g. reading,gym etc."
                className="
                            
                            p-4 
                            m-4
                            
                            text-lg 
                            bg-black 
                            border-2
                            border-neutral-800 
                            rounded-md
                            outline-none
                            text-white
                            focus:border-sky-500
                            focus:border-2
                            transition
                            disabled:bg-neutral-900
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                        "
                onChange={(e) => hobbyHandler(e.target.value)}
              />
            </div>
            <button
              className="
                disabled:opacity-70
                disabled:cursor-not-allowed
                
                font-semibold 
                hover:opacity-80 
                transition 
                border-2
                w-full
                h-12
              bg-lime-600
              text-white
       
                "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
