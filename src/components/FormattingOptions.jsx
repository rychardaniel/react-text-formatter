import Title from "./Title";
import YesOrNo from "./YesOrNo";
import SlugSelector from "./SlugSelector";

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

    const changeSlugSeparator = (slugSeparator) => {
        setOptions((prevState) => ({
            ...prevState,
            slugSeparator,
        }));
    };

    const renderOptions = () => {
        if (options.type === 1 || options.type === 2 || options.type === 4) {
            return (
                <>
                    <YesOrNo
                        key="accents"
                        change={changeAccents}
                        selected={options.accents}
                    >
                        Accents?
                    </YesOrNo>
                    <YesOrNo
                        key="punctuation"
                        change={changePunctuation}
                        selected={options.punctuation}
                    >
                        Punctuation?
                    </YesOrNo>
                </>
            );
        }
        if (options.type === 3) {
            return (
                <SlugSelector
                    options={options}
                    changeSlugSeparator={changeSlugSeparator}
                />
            );
        }
        if (options.type === 5) {
            return <h1 className="text-white">Em desenvolvimento</h1>;
        }
    };

    return (
        <div className="bg-neutral-700 w-full md:w-1/5 rounded-md p-2 text-center">
            <div>
                <Title>FORMATTING OPTIONS</Title>
            </div>
            <div className="flex flex-col gap-6 items-center">
                {renderOptions()}
            </div>
        </div>
    );
};

export default FormattingOptions;
