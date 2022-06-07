interface ButtonProps {
    onClick?: () => void;
    value?: React.ReactElement | React.ReactElement[];
}

declare module 'child-mf/button' {
    const Button: React.ComponentType<ButtonProps>;
    export default Button;
}