import Title from "./Title";
import YesOrNo from "./YesOrNo";

const FormattingOptions = () => {
    return (
        <div className="bg-neutral-700 w-1/5 rounded-md p-2 text-center">
            <Title>FORMATTING OPTIONS</Title>
            <div className="flex flex-col gap-6 items-center">
                <YesOrNo>Accents?</YesOrNo>
                <YesOrNo>Punctuation?</YesOrNo>
            </div>
        </div>
    );
};

export default FormattingOptions;
