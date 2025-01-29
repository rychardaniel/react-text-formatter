import React from "react";

const ButtonIO = ({ children, onClick, title }) => {
    return (
        <button
            className="bg-neutral-800 p-1.5 rounded-md shadow-md hover:bg-zinc-200 hover:text-black active:scale-95 transition transform duration-150 cursor-pointer focus:outline-none"
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
};

export default ButtonIO;
