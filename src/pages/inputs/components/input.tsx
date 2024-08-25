import clsx from "clsx";

interface inputTypes {
  type: string;
  placeholder?: string;
  label?: string;
  className?: string;
  variant: "default";
  name?: string;
}

export const Input = ({
  type,
  placeholder,
  label,
  className,
  variant,
  name,
}: inputTypes) => {
  const variants = {
    default:
      "py-2 px-4 bg-gray-200 border-2 rounded-12 outline-none w-[90%] text-lg fonr-semibold",
  };
  return (
    <>
      <label className="block mb-2 text-lg font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className={clsx(className, variants[variant])}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
