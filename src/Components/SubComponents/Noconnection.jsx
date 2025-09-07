import React from 'react'

const Noconnection = () => {
  return (
      <div className="flex flex-col items-center justify-center w-full h-ull text-center">
        <img 
          src="../../public/Icons/pngtree-lost.png"
          alt="No Internet"
          className="w-[100vh] mb-4"
        />
        <h2 className="text-xl font-bold"> !اتصال به اینترنت برقرار نیست </h2>
      </div>
  )
}

export default Noconnection
