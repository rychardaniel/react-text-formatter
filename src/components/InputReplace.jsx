import { X } from "lucide-react";

const InputReplace = ({ children, state, setState }) => {
    return (
        <div className="flex gap-2 relative">
            <h4 className="w-1/4 bg-neutral-700 text-neutral-200 rounded-md">
                {children}
            </h4>
            <input
                type="text"
                className="w-3/4 border border-neutral-700 focus:outline-none focus:ring-1 rounded-md pl-1 pr-5"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <button
                className="absolute right-0 scale-55 text-neutral-700 active:scale-45 transition transform duration-150 cursor-pointer focus:outline-none"
                onClick={() => setState("")}
            >
                <X />
            </button>
        </div>
    );
};

export default InputReplace;
