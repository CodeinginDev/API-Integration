import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { getUser } from "../services/userApi";
const ParentContent = () => {
  const [data, setData] = useState([]);

  useEffect(function () {
    getUser().then(setData);
  }, []);

  useEffect(
    function () {
      getUser().then(setData);
    },
    [data],
  );

  const handleSubmit = (submission) => {
    setData([...data, submission]);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <Table data={data} />
    </div>
  );
};

export default ParentContent;
