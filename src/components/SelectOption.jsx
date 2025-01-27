import ButtonOption from "./ButtonOption";
import Title from "./Title";

const SelectOption = () => {
    return (
        <div className="bg-neutral-700 w-1/5 rounded-md p-2 text-center">
            <Title>SELECT OPTION</Title>
            <div className="flex flex-col gap-6 items-center">
                <ButtonOption>UpperCase</ButtonOption>
                <ButtonOption>LowerCase</ButtonOption>
                <ButtonOption>Slug</ButtonOption>
                <ButtonOption>Captalize</ButtonOption>
                <ButtonOption>Replace</ButtonOption>
            </div>
        </div>
    );
};

export default SelectOption;
