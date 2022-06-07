export interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactElement | React.ReactElement[] | string;
};

export type ButtonC = React.FC<ButtonProps>;