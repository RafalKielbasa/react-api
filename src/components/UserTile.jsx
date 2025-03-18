import React from "react";

const UserTile = ({ user, onClick }) => {
  return (
    <div
      className="flex flex-col p-5 border rounded w-sm cursor-pointer "
      onClick={() => onClick(user.id)}
    >
      <h3 className="text-nowrap">User name: {user.name}</h3>
      <h3 className="text-nowrap">User lastname: {user.username}</h3>
      <h3 className="text-nowrap">User email: {user.email}</h3>
    </div>
  );
};

export default UserTile;
