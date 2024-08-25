import clsx from "clsx";

interface buttonTypes {
  children: string;
  onClick?: () => void;
  startIcon?: any;
  endIcon?: any;
  type?: "submit" | "button";
  className?: string;
  variant: "primary" | "secondary" | "warning" | "danger" | "success";
}

export const Button = ({
  children,
  onClick,
  startIcon,
  endIcon,
  type,
  className,
  variant,
}: buttonTypes) => {
  const variants = {
    primary:
      "py-2 px-10 w-[75%] text-xl bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-white font-semibold rounded-12 shadow-lg",
    secondary:
      "py-2 px-10 w-[75%] text-xl bg-gray-300 hover:bg-gray-400 transition-all duration-300 font-semibold rounded-12 shadow-lg",
    warning:
      "py-2 px-10 w-[75%] text-xl bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-white font-semibold rounded-12 shadow-lg",
    danger:
      "py-2 px-10 w-[75%] text-xl bg-red-600 hover:bg-red-500 transition-all duration-300 text-white font-semibold rounded-12 shadow-lg",
    success:
      "py-2 px-10 w-[75%] text-xl bg-green-600 hover:bg-green-500 transition-all duration-300 text-white font-semibold rounded-12 shadow-lg",
  };
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(className, variants[variant])}
        type={type}
      >
        <span>{startIcon}</span>
        <span>{children}</span>
        <span>{endIcon}</span>
      </button>
    </>
  );
};

export default Button;
