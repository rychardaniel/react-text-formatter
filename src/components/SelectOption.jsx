import ButtonOption from "./ButtonOption";
import Title from "./Title";

const SelectOption = ({ selectedOption, setSelectedOption }) => {
    return (
        <div className="bg-neutral-700 w-1/5 rounded-md p-2 text-center">
            <Title>SELECT OPTION</Title>
            <div className="flex flex-col gap-6 items-center">
                <ButtonOption
                    type={1}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                >
                    UpperCase
                </ButtonOption>
                <ButtonOption
                    type={2}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                >
                    LowerCase
                </ButtonOption>
                <ButtonOption
                    type={3}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                >
                    Slug
                </ButtonOption>
                <ButtonOption
                    type={4}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                >
                    Captalize
                </ButtonOption>
                <ButtonOption
                    type={5}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                >
                    Replace
                </ButtonOption>
            </div>
        </div>
    );
};

export default SelectOption;
