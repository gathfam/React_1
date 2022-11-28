import React from "react";

function TextField({ label, width, Icons, ...props }) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <label htmlFor="">{label}</label>
      <div className="w-full p-3 border-2 border-black flex items-center">
        <input {...props} className={`w-full `} placeholder={label} />
        <p className="text-md">{Icons}</p>
      </div>
    </div>
  );
}

export default TextField;
