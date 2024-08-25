import Button from "../buttons/components/button";
import { Tooltip } from "./components/tooltip";

export const Tooltips = () => {
  return (
    <>
      <div className="flex flex-wrap mb-14">
        <div className="relative w-[45%] mb-10">
          <div className="button">
            <Button children="Top tooltip" variant="primary" />
            <div className="buttonTooltip absolute w-full top-0 right-20">
              <Tooltip
                variant="top"
                className="absolute"
                title="text for tooltip"
              />
            </div>
          </div>
        </div>
        <div className="relative w-[45%] mb-10">
          <div className="button">
            <Button children="Bottom tooltip" variant="primary" />
            <div className="buttonTooltip absolute w-full top-0 right-20">
              <Tooltip
                variant="bottom"
                className="absolute"
                title="text for tooltip"
              />
            </div>
          </div>
        </div>
        <div className="relative w-[45%] mb-10">
          <div className="button">
            <Button children="Left tooltip" variant="primary" />
            <div className="buttonTooltip absolute w-full top-0 right-20">
              <Tooltip
                variant="left"
                className="absolute"
                title="text for tooltip"
              />
            </div>
          </div>
        </div>
        <div className="relative w-[45%] mb-10">
          <div className="button">
            <Button children="Right tooltip" variant="primary" />
            <div className="buttonTooltip absolute w-full top-0 right-20">
              <Tooltip
                variant="right"
                className="absolute"
                title="text for tooltip"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tooltips;
