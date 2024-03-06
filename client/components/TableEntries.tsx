import useEditModal from "@/app/_store/useEditModal";
import axios from "axios";
import React, { useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  hobbies: string[];
}

interface TableProps {
  index: number;
  user: User;
  addCheck: (user: User) => void;
  userData: User[];
  setUserData: (user: User[]) => void;
}

const TableEntries: React.FC<TableProps> = ({
  index,

  user,
  addCheck,
  userData,
  setUserData,
}) => {
  const [c, setC] = useState(false);
  const { _id, name, email, phoneNumber, hobbies } = user;
  const { onOpen, setId } = useEditModal();

  const handlecheck = () => {
    setC(!c);

    addCheck(user);
  };

  const deleteHandler = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/deletePerson/${_id}`
    );
    const afterDeleteUsers = userData.filter((e) => e._id !== _id);
    setUserData(afterDeleteUsers);
  };

  const updateHandler = async () => {
    setId(_id);
    onOpen();
  };

  return (
    <tr>
      <td className="border px-4 py-2">{index + 1}</td>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{email}</td>
      <td className="border px-4 py-2">{phoneNumber}</td>
      <td className="border px-4 py-2">{hobbies.join(", ")}</td>
      <td className="border px-4 py-2">
        <input type="checkbox" onChange={handlecheck} checked={c} />
      </td>
      <td className="border px-4 py-2 rounded-md bg-orange-500 text-white">
        <button onClick={updateHandler}>Update</button>
      </td>
      <td className="border px-4 py-2 rounded-md bg-red-900 text-white">
        <button onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default TableEntries;
