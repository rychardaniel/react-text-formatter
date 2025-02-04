import SlugButtonOption from "./SlugButtonOption";

const slugSelector = ({ options, changeSlugSeparator }) => {
    return (
        <div className="bg-neutral-800 w-4/5 rounded-md p-2 gap-3 flex flex-col text-white">
            <h3>Slug Separator</h3>
            <div className="flex gap-2 justify-center">
                <SlugButtonOption
                    options={options}
                    changeSlugSeparator={changeSlugSeparator}
                    value={"-"}
                >
                    Hyphen
                </SlugButtonOption>
                <SlugButtonOption
                    options={options}
                    changeSlugSeparator={changeSlugSeparator}
                    value={"_"}
                >
                    Underline
                </SlugButtonOption>
            </div>
        </div>
    );
};

export default slugSelector;
