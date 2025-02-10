import Title from "./Title";
import YesOrNo from "./YesOrNo";
import SlugSelector from "./SlugSelector";
import ReplaceSelector from "./ReplaceSelector";

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

    const changeReplace = (of, to) => {
        setOptions((prevState) => ({
            ...prevState,
            toReplace: {
                of,
                to,
            },
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
            return <ReplaceSelector changeReplace={changeReplace} />;
        }
    };

    return (
        <div className="bg-neutral-700 w-full md:w-1/5 rounded-md p-2 text-center">
            <div>
                <Title>FORMATTING OPTIONS</Title>
            </div>
            <div className="flex flex-col gap-2 items-center">
                {renderOptions()}
            </div>
        </div>
    );
};

export default FormattingOptions;
