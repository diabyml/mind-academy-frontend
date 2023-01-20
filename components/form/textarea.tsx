import React from "react";

// interface Props {}

type Props = React.HTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  type?: string;
  value: string;
  name: string;
  label?: string;
  error?: string;
  handler?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<Props> = ({
  handler,
  id,
  label,
  value,
  error,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label className="form-label margin-bottom-xxxs" htmlFor={id}>
          {" "}
          {label}{" "}
        </label>
      )}
      <textarea
        className="form-control width-100% height-xxxl"
        value={value}
        onChange={handler}
        {...props}
      />
      {error && <p className="text-xs color-error margin-top-xxs">{error}</p>}
    </div>
  );
};

export default TextArea;
