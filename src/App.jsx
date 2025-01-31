import { useEffect, useState } from "react";
import Desktop from "./components/Desktop";
import FormattingOptions from "./components/FormattingOptions";
import SelectOption from "./components/SelectOption";

function App() {
    const [options, setOptions] = useState(
        JSON.parse(localStorage.getItem("options")) || {
            type: 1,
            accents: false,
            punctuation: false,
        }
    );
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        localStorage.setItem("options", JSON.stringify(options));

        switch (options.type) {
            case 1:
                setOutput(input.toUpperCase());
                break;
            case 2:
                setOutput(input.toLowerCase());
                break;
            case 3:
                setOutput(
                    input
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/[^a-z0-9 ]/g, "")
                        .trim()
                        .replace(/\s+/g, "-")
                );
                break;
            case 4:
                setOutput(
                    input
                        .toLowerCase()
                        .replace(/(^|\s)\S/g, (match) => match.toUpperCase())
                );
                break;
            default:
                break;
        }
    }, [options, input]);

    return (
        <div className="bg-neutral-800 w-screen h-screen flex p-6 gap-6">
            <SelectOption options={options} setOptions={setOptions} />
            <FormattingOptions options={options} setOptions={setOptions} />
            <Desktop input={input} setInput={setInput} output={output} />
        </div>
    );
}

export default App;
