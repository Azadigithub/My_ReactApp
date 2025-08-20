import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Networkstatus from "./SubComponents/Networkstatus";
import Noconnection from "./SubComponents/Noconnection";

const Shop = () => {
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);

  //   return (
  //     <div>
  //       <h1>Shop</h1>
  //       {products.map((post) => (
  //         <span key={post.userId}>
  //           <h1>{post.id}</h1>
  //           {/* <h6>{post.userId}</h6> */}
  //           <h2>{post.body}</h2>
  //           <h3>{post.body}</h3>
  //           <hr />
  //         </span>
  //       ))}
  //     </div>
  //   );
  const [data, setData] = useState([]);

  const Connection = Networkstatus();
  // _____ For debugging _____
  //   console.log('Connection: '+ navigator.onLine);
  // console.log('status:  '+ Connection);

  // const [connection, setConnection] = useState(navigator.onLine);
  // const connected = ()=>{setConnection(true)}
  // const disconnected = ()=>{setConnection(false)}
  // window.addEventListener('online',connected)
  if (Connection) {
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  } else {
    return <Noconnection />;
  }

  return (
    <div className="">
      {Connection ? (
        <li className="text-green-700">you are online</li>
      ) : (
        <li className="text-red-600">you are offline</li>
      )}
      <div>
        <h1>Shop</h1>
        {data.map((post) => (
          <span key={post.userId}>
            <h1>{post.id}</h1>
            {/* <h6>{post.userId}</h6> */}
            <h2>{post.body}</h2>
            <h3>{post.body}</h3>
            <hr />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Shop;
