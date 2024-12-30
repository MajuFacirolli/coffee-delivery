import classNames from "classnames"

export type TAccentColor = "yellow-dark" | "yellow" | "grey-dark" | "purple"

const accentColorMap = {
    "yellow-dark": "bg-yellow-dark",
    yellow: "bg-yellow",
    "grey-dark": "bg-base-text",
    purple: "bg-purple"
}

export interface ICategoryItemProps {
    icon: React.ElementType
    description: string
    accentColor?: TAccentColor
}

export const CategoryItem = ({ icon: Icon, description, accentColor = "yellow-dark" }: ICategoryItemProps) => {
    return (
        <div className="flex items-center space-x-3">
            <span className={classNames("text-white rounded-full p-2", accentColorMap[accentColor])}>
                <Icon className="size-4 fill-current" weight="fill"/>
            </span>
            <span className="text-m text-base-text">{description}</span>
        </div>
    )
}