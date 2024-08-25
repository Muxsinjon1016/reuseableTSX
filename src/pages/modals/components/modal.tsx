interface modalTypes {
  title?: string;
  desription: string;
  onClose: () => void;
}

export const Modal = ({ title, desription, onClose }: modalTypes) => {
  return (
    <>
      <div onClick={onClose} className="absolute inset-0 opacity-90 z-50 bg-gray-400">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-[500px] py-5 px-9 rounded-20 mx-auto mt-[200px]"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium mb-4">{title}</h3>
            <p onClick={onClose} className="text-xl cursor-pointer font-bold">
              x
            </p>
          </div>
          <p className="text-lg">{desription}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
