import classNames from "classnames"
import { forwardRef, InputHTMLAttributes } from "react"

interface IInputRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">{
    isSelected?: boolean
    label: string
    icon?: React.ElementType
}

const InputRadioComponent = ({
label,
icon: Icon,
isSelected, 
...props
}: IInputRadioProps, 
ref: React.Ref<HTMLInputElement> 
):JSX.Element => {
    return (
        <label className={classNames("form-field-radio", {"selected": isSelected})}>
            {Icon && <Icon className="size-4 text-purple"/>}
            {label}
            <input
                {...props}
                type="radio" 
                ref={ref} 
                className="hidden"
            />
        </label>
    )
}

export const Radio = forwardRef(InputRadioComponent)