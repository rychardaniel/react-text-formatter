const InputReplace = ({ children, state, setState }) => {
    return (
        <div className="flex gap-2">
            <h4 className="w-1/4 bg-neutral-700 text-neutral-200 rounded-md">
                {children}
            </h4>
            <input
                type="text"
                className="w-3/4 border border-neutral-700 focus:outline-none focus:ring-1 rounded-md px-1"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
        </div>
    );
};

export default InputReplace;
