import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Networkstatus from "./SubComponents/Networkstatus";
import Noconnection from "./SubComponents/Noconnection";
import { Table, Container, Spinner } from "react-bootstrap";

const Shop = () => {
  const [data, setData] = useState([]);
  const Connection = Networkstatus();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        })
        .catch(() => setLoading(false));
    }
    // if (loading) {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //       // setTimeout(() => {
    //       //   setLoading(false);
    //       // }, 3000);
    //     })
    //     .catch(() => setLoading(false));
    // }
  }, []);

  window.addEventListener("load", function () {
    console.log("loading...");
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // setLoading(false);
  });

  return (
    <div>
      {Connection ? (
        <Container dir="ltr">
          <h1>Shop</h1>
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              <Spinner animation="border" role="status" />
              {/* <span className="ms-2">درحال انتفال به سایت مورد نظر هستید...</span> */}
              <span className="ms-2">Loading...</span>
            </div>
          ) : (
            // <Table striped bordered hover>
            //   <thead>
            //     <tr>
            //       <th>ID</th>
            //       <th>title</th>
            //       <th>body</th>
            //     </tr>
            //   </thead>
            //   <tbody>
            //     {data.map((post) => (
            //       <tr key={post.id}>
            //         <td>{post.id}</td>
            //         <td>{post.title}</td>
            //         <td>{post.body}</td>
            //       </tr>
            //     ))}
            //   </tbody>
            // </Table>
                        <div className="grid grid-cols-[repeat(5,200px)] items-center justify-center gap-[40px] mt-[50px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[215px] h-[] bg-gray-300 border-gray-400 hover:bg-gray-400 hover:cursor-pointer border-2 rounded-2xl"
        >
          <div className="w-[100%] h-[50%]  p-[10px] rounded-2xl">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-[50%] flex flex-col items-center justify-center p-[10px]">
            <h6 className="">{item.title}</h6>
            <p className=" overflow-hidden w-full  ">
              {item.description}
            </p>
            <p className="w-full bg-white text-center text-green-800">{item.price + "$"}</p>
            {/* <p className="line-clamp-3 overflow-hidden ">{item.description.length > 50 ? item.description.slice(0, 100) + "..." : item.description}</p> */}

            {/* <h6>{item.categort}</h6> */}
          </div>
        </div>
      ))}
    </div>

          )}
        </Container>

      ) : (
        <Noconnection />
      )}
    </div>


  );
};

export default Shop;
