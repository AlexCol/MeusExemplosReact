import { ChangeEvent, MutableRefObject, useRef } from "react";
import MarkDownToolbar from "./MarkDownToolbar";

export const MarkDownEditComp = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>;

  const insertMarkings = (initialSimbol: string, finalSimbol: string) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const originalText = textArea.value;
    const beforeText = originalText.substring(0, start);
    const selectedText = originalText.substring(start, end);
    const afterText = originalText.substring(end);
    const newText = `${beforeText}${initialSimbol}${selectedText}${finalSimbol}${afterText}`;
    textArea.value = newText;
    localStorage.setItem("markdownText", newText);
  };

  const OnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
      localStorage.setItem("markdownText", e.target.value);
    } else {
      localStorage.removeItem("markdownText");
    }
  };

  return (
    <div>
      <MarkDownToolbar insertText={insertMarkings} />
      <textarea
        id="Editor"
        ref={textAreaRef}
        onChange={(e) => OnChange(e)}
        defaultValue={localStorage.getItem("markdownText") || "# Informe seu texto aqui."}
      ></textarea>
    </div>
  );
};
