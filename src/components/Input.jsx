import { ClipboardPaste, Eraser } from "lucide-react";
import ButtonIO from "./ButtonIO";

const Input = ({ input, setInput }) => {
    function onClickPaste() {
        navigator.clipboard
            .readText()
            .then((text) => setInput(text))
            .catch((err) =>
                console.error(
                    `Erro ao ler conteúdo da área de transferência: ${err}`
                )
            );
    }

    function onClickErase() {
        setInput("");
    }

    return (
        <div className="text-white text-left px-6 flex flex-col gap-2">
            <h3>Input</h3>
            <textarea
                className="w-full h-auto p-2 bg-neutral-800 text-white rounded-md border border-white focus:outline-none focus:ring-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <div className="flex gap-2">
                <ButtonIO onClick={onClickPaste} title="Paste">
                    <ClipboardPaste />
                </ButtonIO>
                <ButtonIO onClick={onClickErase} title="Clear">
                    <Eraser />
                </ButtonIO>
            </div>
        </div>
    );
};

export default Input;
