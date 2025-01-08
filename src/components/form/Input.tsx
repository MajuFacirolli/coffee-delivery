import classNames from "classnames";
import {
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  forwardRef,
} from "react";

type TCustomInputTypes = Exclude<
  HTMLInputTypeAttribute,
  | "radio"
  | "color"
  | "submit"
  | "file"
  | "image"
  | "reset"
  | "button"
  | "checkbox"
  | "hidden"
  | "range"
>;

interface ITextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  type?: TCustomInputTypes;
  helper?: string;
  optional?: boolean;
}

const InputComponent = ({
type = "text",
helper,
disabled,
optional,
className,
...props
}: ITextInputProps,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element => {

  return (
    <div
      aria-disabled={disabled}
      className={classNames("group flex flex-col relative", className)}
    >
        <input
          {...props}
          type={type}
          ref={ref}
          disabled={disabled}
          className="form-field"
        />
        {optional && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-base-label italic">
            Opcional
          </span>
        )}
      {helper && (
        <p>
          <small className="form-field-helper">{helper}</small>
        </p>
      )}
    </div>
  );
};

export const Input = forwardRef(InputComponent);
