import React from "react";

function Button({
    children,bgColor,className, ...props
}){
    return (
      <>
        <div className={`flex w-full justify-center rounded-md${className} ${bgColor}`} >
          
          <button
            {...props}
            
          >
            {children}
          </button>
        </div>
      </>
    );
}

export default Button
