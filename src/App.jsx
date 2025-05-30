import { useEffect, useState } from "react";
import Desktop from "./components/Desktop";
import FormattingOptions from "./components/FormattingOptions";
import SelectOption from "./components/SelectOption";
import { transformInput } from "./transformInput";
import SwoppIO from "./contexts/swoppOI";

function App() {
    const defaultOptions = {
        type: 1,
        accents: true,
        punctuation: true,
        slugSeparator: "-",
        toReplace: {
            of: "",
            to: "",
        },
    };

    const [options, setOptions] = useState(() => {
        const storedOptions = JSON.parse(localStorage.getItem("options")) || {};
        return { ...defaultOptions, ...storedOptions };
    });

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        localStorage.setItem("options", JSON.stringify(options));
        setOutput(transformInput(input, options));
    }, [options]);

    useEffect(() => {
        setOutput(transformInput(input, options));
    }, [input]);

    return (
        <div className="bg-neutral-800 w-screen min-h-screen flex flex-col md:flex-row p-6 gap-6">
            <SelectOption options={options} setOptions={setOptions} />
            <SwoppIO.Provider value={{ output, setInput }}>
                <FormattingOptions options={options} setOptions={setOptions} />
            </SwoppIO.Provider>
            <Desktop input={input} setInput={setInput} output={output} />
        </div>
    );
}

export default App;
