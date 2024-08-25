import Button from "./components/button";

export const Buttons = () => {
  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        <div className="w-[45%] text-center mb-10">
          <Button variant="primary" children="Primary type" />
        </div>
        <div className="w-[45%] text-center mb-10">
          <Button variant="secondary" children="Secondary type" />
        </div>
        <div className="w-[45%] text-center mb-10">
          <Button variant="warning" children="warning type" />
        </div>
        <div className="w-[45%] text-center mb-10">
          <Button variant="danger" children="danger type" />
        </div>
        <div className="w-[45%] text-center mb-10">
          <Button variant="success" children="success type" />
        </div>
      </div>
    </>
  );
};

export default Buttons;
