import React from "react";
import { useId } from "react";

function Select({
    options,value,classname, label, ...props
},ref){
    const id = useId()
    return (<>
           <div className="w-full">
            {label && (<label htmlFor={id}>{label} : </label>)}
            <select className={classname} id={id} ref={ref} {...props}>
              {
                options?.map((option,index)=>(
                    <option key={option} value={value[index]}>
                        {option}
                    </option>
                ))
              }
            </select>
           </div>
    </>)
}

export default React.forwardRef(Select)