import { ClipboardCopy } from "lucide-react";

const Output = ({ output }) => {
    return (
        <div className="text-white text-left px-6 flex flex-col gap-2">
            <h3>Output</h3>
            <textarea
                value={output}
                readOnly
                className="w-full p-2 bg-neutral-800 text-white rounded-md border border-white focus:outline-none focus:ring-1"
            ></textarea>
            <div className="flex gap-2">
                <ClipboardCopy />
            </div>
        </div>
    );
};

export default Output;
