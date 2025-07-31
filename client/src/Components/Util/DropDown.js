import React from 'react';
import { Link } from "react-router-dom";

const DropDown = (props) => {
    const s1 = "rounded-t bg-rose-300 text-gray-800 hover:bg-red hover:text-white py-2 px-4 block whitespace-no-wrap font-semibold transition-all duration-300";
    const s2 =
    "px-6 py-2 font-semibold text-base rounded-full group-hover:px-12 group-hover:drop-shadow-2xl shadow-sm bg-darkred hover:bg-red z-30 text-white-900 hover:drop-shadow-md hover:opacity-80 transition-all duration-300";

    return (
    <div className="group inline-block relative">
    <button
      className="text-gray-800 font-semibold mx-4 rounded inline-flex"
    >
      <span className={s2}>
        
        {props.title} &nbsp;
        <svg
            className="fill-current inline h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
        </svg>

    </span>
      
    </button>
    <ul className="ml-6 px-2 py-2 absolute hidden text-gray-800 pt-1 z-10 group-hover:block w-max bg-rose-200 hover:drop-shadow-2xl border-darkred hover:border-b-2 rounded-tl-lg rounded-b-lg shadow-lg">
        {
            props.children.map((e,i)=>{
                return (
                    <li><Link to={props.links[i]} className={s1}>{e}</Link></li>
                )
            })
        }
    </ul>
</div>  )
}

export default DropDown