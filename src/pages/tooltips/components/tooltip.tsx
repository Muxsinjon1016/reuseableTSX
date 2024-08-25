import clsx from "clsx";

interface tooltipTypes {
  title: string;
  className: string;
  variant: "top" | "left" | "right" | "bottom";
}

export const Tooltip = ({ title, className, variant }: tooltipTypes) => {
  const variants = {
    top: "-top-9 right-20",
    left: "-left-10 top-1",
    right: "-right-16 top-1",
    bottom: "-bottom-20 right-20",
  };
  return (
    <>
      <div className={clsx(className, variants[variant])}>
        <div className="relative bg-gray max-w-[220px]">
          <p className="text-xs bg-gray-200 rounded-6 font-medium py-2 px-4">
            {title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
