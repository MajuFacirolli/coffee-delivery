import classNames from "classnames"

type iconColor = 'default' | 'secondary'

interface IFormHeadingProps {
    icon: React.ElementType
    iconColor?: iconColor
    title: string
    subtitle: string
}

const iconColorMap = {
    default: "text-yellow",
    secondary: "text-purple"
}

export const FormHeading = ({icon: Icon, title, subtitle, iconColor = "default"}: IFormHeadingProps) => {
    return (
        <div className="flex items-start space-x-2">
            <Icon className={classNames("size-6", iconColorMap[iconColor])}/>
            <div>
                <h3 className="text-m text-base-subtitle">{title}</h3>
                <p className="text-s text-base-text">{subtitle}</p>
            </div>
        </div>
    )
}