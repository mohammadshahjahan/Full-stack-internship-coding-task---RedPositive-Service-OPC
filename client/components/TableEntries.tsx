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
}

const TableEntries: React.FC<TableProps> = ({
  index,

  user,
  addCheck,
}) => {
  const [c, setC] = useState(false);
  const { name, email, phoneNumber, hobbies } = user;

  const handlecheck = () => {
    setC(!c);

    addCheck(user);
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
        <button>Update</button>
      </td>
      <td className="border px-4 py-2 rounded-md bg-red-900 text-white">
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TableEntries;
