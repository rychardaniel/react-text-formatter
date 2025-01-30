import ButtonOption from "./ButtonOption";
import Title from "./Title";

const SelectOption = ({ options, setOptions }) => {
    return (
        <div className="bg-neutral-700 w-1/5 rounded-md p-2 text-center">
            <Title>SELECT OPTION</Title>
            <div className="flex flex-col gap-6 items-center">
                <ButtonOption
                    type={1}
                    options={options}
                    setOptions={setOptions}
                >
                    UpperCase
                </ButtonOption>
                <ButtonOption
                    type={2}
                    options={options}
                    setOptions={setOptions}
                >
                    LowerCase
                </ButtonOption>
                <ButtonOption
                    type={3}
                    options={options}
                    setOptions={setOptions}
                >
                    Slug
                </ButtonOption>
                <ButtonOption
                    type={4}
                    options={options}
                    setOptions={setOptions}
                >
                    Captalize
                </ButtonOption>
                <ButtonOption
                    type={5}
                    options={options}
                    setOptions={setOptions}
                >
                    Replace
                </ButtonOption>
            </div>
        </div>
    );
};

export default SelectOption;
