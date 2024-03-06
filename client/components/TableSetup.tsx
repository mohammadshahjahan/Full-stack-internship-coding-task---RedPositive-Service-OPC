"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import TableEntries from "./TableEntries";

interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  hobbies: string[];
}
const TableSetup = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [toSendData, setToSendData] = useState<User[]>([]);
  const [checkedEntries, setCheckedEntries] = useState<string[]>([]);

  const addCheck = (user: User) => {
    console.log();
    const isChecked = checkedEntries.includes(user._id);

    if (isChecked) {
      // Remove user from checkedEntries if already checked
      const updatedCheckedEntries = checkedEntries.filter(
        (id) => id !== user._id
      );
      const updatedToSendData = toSendData.filter((e) => e._id !== user._id);
      setCheckedEntries(updatedCheckedEntries);
      setToSendData(updatedToSendData);
    } else {
      // Add user to checkedEntries if not already checked
      setCheckedEntries([...checkedEntries, user._id]);
      setToSendData([...toSendData, user]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/getAllPersonsData`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userData]);

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 pl-4">User Data</h2>
        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">S. No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Hobbies</th>
                <th className="px-4 py-2">Select</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <TableEntries
                  key={user._id}
                  index={index}
                  user={user}
                  addCheck={addCheck}
                  userData={userData}
                  setUserData={setUserData}
                />
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 "
          onClick={async () => {
            try {
              await axios.post("/api/sendmail", { toSendData });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default TableSetup;
