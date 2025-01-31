import Input from "./Input";
import Output from "./Output";
import Title from "./Title";

const Desktop = ({ input, setInput, output }) => {
    return (
        <div className="bg-neutral-700 w-full md:w-3/5 rounded-md p-2 text-center">
            <Title>DESKTOP</Title>
            <div className="flex flex-col gap-6">
                <Input input={input} setInput={setInput} />
                <Output output={output} />
            </div>
        </div>
    );
};

export default Desktop;
