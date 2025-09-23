import React from "react";

const City = (props) => {
  return (
    <div className={`h-[170px] xxt:h-[220px] xxx:h-[320px] xss:h-[400px] rounded-[10px] ${props.colapan===true?'col-span-2':''}`}>
      <img
        src={props.image}
        alt={props.alt}
        className="w-full h-full rounded-[10px] "
      />
    </div>
  );
};

export default City;
