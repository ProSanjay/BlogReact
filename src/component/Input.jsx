import React from "react";

import { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", labelClass="", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div>
        {label && <label className={`inline-block mb-1 pr-1 font ${labelClass}`}>{label}</label>}
      </div>

      <div className="w-full   min-w-[200px]">
        <input
          type={type}
          id={id}
          ref={ref}
          className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${className}`}
          {...props}
        />
      </div>
    </>
  );
});

export default Input;
