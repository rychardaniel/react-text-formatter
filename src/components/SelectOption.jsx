import ButtonOption from "./ButtonOption";
import Title from "./Title";

const SelectOption = ({ setSelectedOption }) => {
    return (
        <div className="bg-neutral-700 w-1/5 rounded-md p-2 text-center">
            <Title>SELECT OPTION</Title>
            <div className="flex flex-col gap-6 items-center">
                <ButtonOption type={1} setSelectedOption={setSelectedOption}>
                    UpperCase
                </ButtonOption>
                <ButtonOption type={2} setSelectedOption={setSelectedOption}>
                    LowerCase
                </ButtonOption>
                <ButtonOption type={3} setSelectedOption={setSelectedOption}>
                    Slug
                </ButtonOption>
                <ButtonOption type={4} setSelectedOption={setSelectedOption}>
                    Captalize
                </ButtonOption>
                <ButtonOption type={5} setSelectedOption={setSelectedOption}>
                    Replace
                </ButtonOption>
            </div>
        </div>
    );
};

export default SelectOption;
