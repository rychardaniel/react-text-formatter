import { useEffect, useState } from "react";
import Desktop from "./components/Desktop";
import FormattingOptions from "./components/FormattingOptions";
import SelectOption from "./components/SelectOption";

function App() {
    const [selectedOption, setSelectedOption] = useState(1);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        console.log("Renderizou");
    }, [input]);

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
