const ButtonOption = (props) => {
    return (
        <button className="bg-neutral-800 text-white p-6 w-1/2 rounded-md cursor-pointer">
            {props.children}
        </button>
    );
};

export default ButtonOption;
