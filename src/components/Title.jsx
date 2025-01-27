const Title = (props) => {
    return (
        <h1 className="text-white text-xl font-bold mb-6 mt-2">
            {props.children}
        </h1>
    );
};

export default Title;
