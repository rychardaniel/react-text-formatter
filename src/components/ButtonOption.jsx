const ButtonOption = ({
    children,
    selectedOption,
    setSelectedOption,
    type,
}) => {
    return (
        <button
            className={`p-6 w-1/2 rounded-md cursor-pointer ${
                selectedOption.type === type
                    ? "bg-zinc-200 text-black"
                    : "bg-neutral-800 text-white"
            }`}
            onClick={() =>
                setSelectedOption((prevState) => ({
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
