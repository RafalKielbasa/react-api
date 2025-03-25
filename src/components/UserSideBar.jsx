import React from "react";

export const UserSideBar = ({ data, handleCloseSideBar }) => {
  return (
    <div className="border-r p-5 h-screen">
      <h3>Name: {data?.name} </h3>
      <h3>Lastname: {data?.username} </h3>
      <h3>Email: {data?.email} </h3>
      <h3>Address: </h3>
      <div>
        <h4>Street: {data?.address.street}</h4>
        <h4>zip-code: {data?.address.zipcode}</h4>
        <h4>City: {data?.address.city}</h4>
      </div>
      <h3>Phone: {data?.phone} </h3>
      <button
        className="rounded-xl bg-red-500 p-3 mt-3

"
        onClick={handleCloseSideBar}
      >
        Close
      </button>
    </div>
  );
};
