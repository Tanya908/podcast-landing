type ButtonVariant = "green" | "white";

type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    href?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit";
};

export function Button({
    children,
    variant = "green",
    href,
    onClick,
    className = "",
    disabled = false,
    type = "button",
}: ButtonProps) {
    const classes = `button-base button-${variant} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={classes}>
            {children}
        </button>
    );
}
