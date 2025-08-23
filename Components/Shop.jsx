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
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          // setTimeout(() => {
          //   setLoading(false);
          // }, 3000);
        })
        .catch(() => setLoading(false));
    }
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>title</th>
                  <th>body</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      ) : (
        <Noconnection />
      )}
    </div>
  );
};

export default Shop;
