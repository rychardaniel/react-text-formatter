const YesOrNo = ({ children, change, options }) => {
    return (
        <div className="flex w-4/5 bg-neutral-800 text-white py-2 px-3 rounded-md justify-between">
            <h2>{children}</h2>
            <div className="flex space-x-4">
                <button
                    className={`rounded-md shadow-md px-1.5 py-2/5 cursor-pointer active:scale-95 transition transform duration-150 focus:outline-none ${
                        options ? "bg-neutral-200 text-black" : ""
                    }`}
                    onClick={() => change(true)}
                >
                    Yes
                </button>
                <button
                    className={`rounded-md shadow-md px-1.5 py-2/5 cursor-pointer active:scale-95 transition transform duration-150 focus:outline-none ${
                        options ? "" : "bg-neutral-200 text-black"
                    }`}
                    onClick={() => change(false)}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default YesOrNo;
