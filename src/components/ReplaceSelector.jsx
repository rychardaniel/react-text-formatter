import { useEffect, useState } from "react";
import InputReplace from "./InputReplace";

const ReplaceSelector = ({ changeReplace }) => {
    const [of, setOf] = useState("");
    const [to, setTo] = useState("");

    useEffect(() => {
        changeReplace(of, to);
    }, [of, to]);

    return (
        <div className="bg-neutral-800 w-4/5 rounded-md text-white p-2 flex flex-col gap-2">
            <h3>To Replace</h3>
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
