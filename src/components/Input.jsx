import { ClipboardPaste, Eraser } from "lucide-react";

const Input = () => {
    return (
        <div className="text-white text-left px-6 flex flex-col gap-2">
            <h3>Input</h3>
            <textarea className="w-full p-2 bg-neutral-800 text-white rounded-md border border-white focus:outline-none focus:ring-1"></textarea>
            <div className="flex gap-2">
                <ClipboardPaste />
                <Eraser />
            </div>
        </div>
    );
};

export default Input;
