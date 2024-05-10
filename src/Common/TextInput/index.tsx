import InpWrapper from "./StyleTextInput";

interface InputProps {
  name?: string;
  type?: string;
  value?: any;
  onChange?: any;
  error?: boolean;
  disabled?: boolean;
  variant?: string; // 'placeholder' 'label'
  label?: any;
  leftIcon?: any;
  rightIcon?: any;
  maxlength?: any;
  onBlur?: any;
  height?: any;
  autoFocus?: any;
  pattern?: any;
}

const TextInput = (props: InputProps) => {
  const {
    name,
    type,
    value,
    onChange,
    error,
    label,
    variant,
    disabled,
    leftIcon,
    rightIcon,
    maxlength,
    onBlur,
    height,
  } = props;
  return (
    <InpWrapper>
      {leftIcon ? <span className="inpIconlft">{leftIcon}</span> : ""}
      <input
        name={name}
        pattern={props.pattern}
        autoFocus={props.autoFocus}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={variant == "placeholder" ? label : ""}
        className={variant == "placeholder" ? "placeholder" : ""}
        maxLength={maxlength}
        onBlur={onBlur}
        height={height}
      />
      {rightIcon ? <span className="inpIconrgt">{rightIcon}</span> : ""}
      {variant == "label" && <label>{label}</label>}
    </InpWrapper>
  );
};
interface TextProps {
  value?: any;
  onchange?: any;
  error?: boolean;
  disabled?: boolean;
  variant: string; // 'placeholder' 'label'
  label: any;
  leftIcon?: any;
  rightIcon?: any;
  maxlength?: any;
  name?: string;
  height?: any;
  onblur?: any;
}

const TextArea = (props: TextProps) => {
  const {
    value,
    onchange,
    error,
    label,
    variant,
    disabled,
    leftIcon,
    rightIcon,
    maxlength,
    name,
    height,
    onblur,
  } = props;
  return (
    <InpWrapper>
      {leftIcon ? <span className="inpIconlft">{leftIcon}</span> : ""}
      <textarea
        value={value}
        onChange={onchange}
        disabled={disabled}
        placeholder={variant == "placeholder" ? label : ""}
        className={variant == "placeholder" ? "placeholder" : ""}
        maxLength={maxlength}
        name={name}
        onBlur={onblur}
      ></textarea>
      {rightIcon ? <span className="inpIconrgt">{rightIcon}</span> : ""}
      {variant == "label" && <label>{label}</label>}
    </InpWrapper>
  );
};

export { TextInput, TextArea };
