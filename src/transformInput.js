export function transformInput(input, options) {
    if (typeof input !== "string") return "";

    const transformations = {
        1: (text) => text.toUpperCase(),
        2: (text) => text.toLowerCase(),
        3: (text) =>
            text
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9 ]/g, "")
                .trim()
                .replace(/\s+/g, options.slugSeparator),
        4: (text) =>
            text
                .toLowerCase()
                .replace(/(^|\s)\S/g, (match) => match.toUpperCase()),
        5: (text) =>
            text.split(options.toReplace.of).join(options.toReplace.to),
    };

    if (options.type === 5 && !options.toReplace.of) {
        return input;
    }

    let result = transformations[options.type]
        ? transformations[options.type](input)
        : input;

    if (options.type === 3) return result;

    if (!options.accents) {
        result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    if (!options.punctuation) {
        result = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'<>[\]]/g, "");
    }

    return result;
}
