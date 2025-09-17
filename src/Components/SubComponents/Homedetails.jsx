import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Homedetails = () => {
  // const { id } = useParams();
  const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch(`https://localhost.../${id}`)
  //     .then((response) => response.json)
  //     .then((data) => setdata(data));
  // },[]);

  return (
    <div>
      <h1>detail </h1>
      {/* <Header image="../../public/Images/Header_images/element2.jpg" /> */}
    </div>
  );
};

export default Homedetails;
