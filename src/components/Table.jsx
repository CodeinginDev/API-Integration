import React, { useState, useEffect } from "react";
import { getUser } from "../services/userApi";

const Table = ({ data }) => {
  return (
    <table className=" w-[90%] items-center rounded-xl bg-slate-400 text-center font-comfortaa ">
      <thead className="border-b-2 font-bold">
        <tr className="">
          <th>FullName</th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
          <th>Nationality</th>
          <th>Country</th>
          <th>Phone NO.</th>
          <th>Martial status</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.nationality}</td>
            <td>{user.country}</td>
            <td>{user.phoneNo}</td>
            <td>{user.martialStatus}</td>
            <td>{user.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
