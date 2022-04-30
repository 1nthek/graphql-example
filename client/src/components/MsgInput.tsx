import { useRef } from "react";

const MsgInput = ({
  mutate,
}: // text = "",
// id = undefined,
{
  mutate: (text: string, id: number) => void;
  // text: string;
  // id?: number;
}) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current?.value;
    if (textRef.current) {
      textRef.current.value = "";
    }
    if (text) {
      mutate(text, 0);
    }
  };

  return (
    <form className="messages__input" onSubmit={onSubmit}>
      <textarea
        ref={textRef}
        // defaultValue={text}
        placeholder="내용을 입력하세요."
      />
      <button type="submit">완료</button>
    </form>
  );
};

export default MsgInput;
