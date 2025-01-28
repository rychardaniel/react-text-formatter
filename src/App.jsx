import { useEffect, useState } from "react";
import Desktop from "./components/Desktop";
import FormattingOptions from "./components/FormattingOptions";
import SelectOption from "./components/SelectOption";

function App() {
    const [selectedOption, setSelectedOption] = useState(
        JSON.parse(localStorage.getItem("selectedOption")) || {
            type: 1,
            accents: false,
            punctuation: false,
        }
    );
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        localStorage.setItem("selectedOption", JSON.stringify(selectedOption));

        switch (selectedOption.type) {
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
            default:
                break;
        }
    }, [selectedOption, input]);

    return (
        <div className="bg-neutral-800 w-screen h-screen flex p-6 gap-6">
            <SelectOption
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />
            <FormattingOptions />
            <Desktop input={input} setInput={setInput} output={output} />
        </div>
    );
}

export default App;
