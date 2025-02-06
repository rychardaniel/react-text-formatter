import { useEffect, useState } from "react";
import InputReplace from "./InputReplace";
import { Trash } from "lucide-react";

const ReplaceSelector = ({ changeReplace }) => {
    const [of, setOf] = useState("");
    const [to, setTo] = useState("");

    useEffect(() => {
        changeReplace(of, to);
    }, [of, to]);

    return (
        <div className="bg-neutral-800 w-4/5 rounded-md text-white p-2 flex flex-col gap-2">
            <div className="flex justify-center relative">
                <h3>To Replace</h3>
                <button
                    className="absolute right-0 bg-neutral-200 text-neutral-800 rounded-md p-0.3 shadow-md hover:bg-zinc-200 hover:text-black active:scale-90 transition transform duration-150 cursor-pointer focus:outline-none"
                    onClick={() => {
                        setOf("");
                        setTo("");
                    }}
                >
                    <Trash className="scale-70" />
                </button>
            </div>
            <InputReplace state={of} setState={setOf}>
                Of
            </InputReplace>
            <InputReplace state={to} setState={setTo}>
                To
            </InputReplace>
        </div>
    );
};

export default ReplaceSelector;
