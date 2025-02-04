const SlugButtonOption = ({
    children,
    options,
    changeSlugSeparator,
    value,
}) => {
    return (
        <button
            className={`px-3 py-1 w-1/2 rounded-md cursor-pointer active:scale-95 transition transform duration-150 focus:outline-none ${
                options.slugSeparator === value
                    ? "text-neutral-800 bg-neutral-200"
                    : "text-white bg-neutral-800"
            }`}
            onClick={() => changeSlugSeparator(value)}
        >
            {children}
        </button>
    );
};

export default SlugButtonOption;
