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
                .replace(/\s+/g, "-"),
        4: (text) =>
            text
                .toLowerCase()
                .replace(/(^|\s)\S/g, (match) => match.toUpperCase()),
    };

    let result = transformations[options.type](input);

    if (!options.accents && options.type !== 3) {
        result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    console.log(result, options);

    if (!options.punctuation && options.type !== 3) {
        result = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'<>[\]]/g, "");
    }

    return result;
}
