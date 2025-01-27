const ButtonOption = ({ children, setSelectedOption, type }) => {
    return (
        <button
            className="bg-neutral-800 text-white p-6 w-1/2 rounded-md cursor-pointer"
            onClick={() => setSelectedOption(type)}
        >
            {children}
        </button>
    );
};

export default ButtonOption;
