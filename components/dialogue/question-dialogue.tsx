import React from "react";

interface Props {
  title: string;
  question: string;
  action: () => void;
  onClose: (state: boolean) => void;
}

const QuestionDialogue: React.FC<Props> = ({
  title,
  question,
  action,
  onClose,
}) => {
  return (
    <div
      className="padding-y-lg position-fixed top-0 right-0 bottom-0 left-0 z-index-overlay flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="bg-white border shadow-md padding-md">
        <header>
          <span className="color-primary text-sm font-semibold">{title}</span>
        </header>
        <div className="margin-bottom-sm">
          <span className="text-sm">{question}</span>
        </div>
        <div className="flex items-center justify-between">
          <span
            className="color-error cursor-pointer"
            onClick={() => onClose(false)}
          >
            Non
          </span>
          <span
            className="color-success cursor-pointer"
            onClick={() => {
              action();
              onClose(false);
            }}
          >
            Oui
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionDialogue;
