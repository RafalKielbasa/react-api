import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import UserTile from "./UserTile";
import { UserSideBar } from "./UserSideBar";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

const UserGrid = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSideBar = (id) => {
    async function getUserData() {
      try {
        const respone = await axios.get(`${apiUrl}/${id}`);
        setUserData(respone.data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(userData);
    getUserData();
    setIsModalOpen(true);
  };
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  const handleCloseSideBar = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);
  return (
    <div className="flex flex-row gap-4">
      {isModalOpen && (
        <UserSideBar data={userData} handleCloseSideBar={handleCloseSideBar} />
      )}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] p-5 gap-4 flex-1">
        {data.map((user) => (
          <UserTile user={user} onClick={() => handleSideBar(user.id)} />
        ))}
      </div>
    </div>
  );
};

export default UserGrid;
