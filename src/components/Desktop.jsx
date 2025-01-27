import Input from "./Input";
import Output from "./Output";
import Title from "./Title";

const Desktop = (props) => {
    return (
        <div className="bg-neutral-700 w-3/5 rounded-md p-2 text-center">
            <Title>DESKTOP</Title>
            <div className="flex flex-col gap-6">
                <Input />
                <Output />
            </div>
        </div>
    );
};

export default Desktop;
