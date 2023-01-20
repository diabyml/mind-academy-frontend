import React from "react";

// interface Props {}

type Props = React.HTMLAttributes<HTMLInputElement> & {
  id: string;
  type?: string;
  name: string;
  value: string;
  label: string;
  error?: string;
  handler?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({ handler, id, label, error,value, ...props }) => {
//   console.log("error:", error);
  return (
    <div>
      {label && (
        <label className="form-label margin-bottom-xxxs" htmlFor={id}>
          {" "}
          {label}{" "}
        </label>
      )}
      <input
        className={`form-control width-100% ${error && "form-control--error"}`}
        value={value}
        onChange={handler}
        {...props}
      />
      {error && (
        <p className="text-xs color-error margin-top-xxs">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
