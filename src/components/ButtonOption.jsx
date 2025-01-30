const ButtonOption = ({ children, options, setOptions, type }) => {
    return (
        <button
            className={`p-6 w-1/2 rounded-md cursor-pointer active:scale-95 transition transform duration-150 shadow-md focus:outline-none ${
                options.type === type
                    ? "bg-zinc-200 text-black"
                    : "bg-neutral-800 text-zinc-200"
            }`}
            onClick={() =>
                setOptions((prevState) => ({
                    ...prevState,
                    type,
                }))
            }
        >
            {children}
        </button>
    );
};

export default ButtonOption;
