import Desktop from "./components/Desktop";
import FormattingOptions from "./components/FormattingOptions";
import SelectOption from "./components/SelectOption";

function App() {
    return (
        <div className="bg-neutral-800 w-screen h-screen flex p-6 gap-6">
            <SelectOption />
            <FormattingOptions />
            <Desktop />
        </div>
    );
}

export default App;
