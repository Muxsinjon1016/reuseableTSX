import Input from "./components/input";

export const Inputs = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <div className="mb-10 w-[50%]">
          <Input type="text" variant="default" label="Text type" />
        </div>
        <div className="mb-10 w-[50%]">
          <Input type="email" variant="default" label="Email type" />
        </div>
        <div className="mb-10 w-[50%]">
          <Input type="password" variant="default" label="Password type" />
        </div>
        <div className="mb-10 w-[50%]">
          <Input type="url" variant="default" label="URL type" />
        </div>
      </div>
    </>
  );
};

export default Inputs;
