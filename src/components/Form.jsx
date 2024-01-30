import React, { useState, useEffect } from "react";
import axios from "axios";
import { addUser, getUser } from "../services/userApi";

const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    phoneNo: "",
    nationality: "",
    country: "",
    address: "",
    martialStatus: "",
    gender: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    addUser(data).then(() => getUser());
    setData({
      name: "",
      email: "",
      age: "",
      phoneNo: "",
      nationality: "",
      country: "",
      address: "",
      martialStatus: "",
      gender: "",
    });
  }

  return (
    <>
      {/* {isError !== "" && <h2>{isError}</h2>}
      {myData.map((post) => {
        const { id, age, name, email, phoneNo, nationality, country, address } =
          post;
        return (
          <div key={id}> 
            {" "}
            <h2>{name}</h2>
            <p>{nationality}</p>
          </div>
        );
      })} */}
      <div className="m-12 ">
        <h1 className="font-roboto text-4xl font-semibold">Create Profile</h1>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" mx-4 grid grid-cols-gridAutoFitCol gap-9 rounded-3xl bg-gray-200 px-12 py-12 font-comfortaa"
      >
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="name">Name</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="email">Email</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="address">Address</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="address"
            value={data.address}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="age">Age</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="phone-no">Phone No:</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="phoneNo"
            value={data.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="country">Country</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="country"
            value={data.country}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="nationality">Nationality</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="nationality"
            value={data.nationality}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="martial-status">Martial Status</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="martialStatus"
            value={data.martialStatus}
            onChange={handleChange}
          />
        </div>
        <div className=" flex gap-8 border-b-2 border-blue-600 ">
          <label htmlFor="martial-status">Gender</label>
          <input
            className="border-none  bg-transparent outline-none"
            type="text"
            name="gender"
            value={data.gender}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-lg bg-blue-700 p-4 font-roboto text-2xl hover:bg-gray-500"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
