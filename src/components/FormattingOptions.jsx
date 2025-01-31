import Title from "./Title";
import YesOrNo from "./YesOrNo";

const FormattingOptions = ({ options, setOptions }) => {
    const changeAccents = (accents) => {
        setOptions((prevState) => ({
            ...prevState,
            accents,
        }));
    };
    const changePunctuation = (punctuation) => {
        setOptions((prevState) => ({
            ...prevState,
            punctuation,
        }));
    };

    return (
        <div className="bg-neutral-700 w-1/5 rounded-md p-2 text-center">
            <Title>FORMATTING OPTIONS</Title>
            <div className="flex flex-col gap-6 items-center">
                <YesOrNo change={changeAccents} options={options.accents}>
                    Accents?
                </YesOrNo>
                <YesOrNo
                    change={changePunctuation}
                    options={options.punctuation}
                >
                    Punctuation?
                </YesOrNo>
            </div>
        </div>
    );
};

export default FormattingOptions;
