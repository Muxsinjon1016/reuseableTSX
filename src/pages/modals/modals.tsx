import React from "react";
import Modal from "./components/modal";
import Button from "../buttons/components/button";

export const Modals = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <div>
        <Button className="w-full"
          onClick={() => setModal(!modal)}
          variant="primary"
          children="Open modal"
        />
        {modal && (
          <Modal
            onClose={() => setModal(!modal)}
            title="Title of modal"
            desription=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab
        aliquid pariatur qui dicta delectus ea nesciunt doloribus culpa. Quam
        optio neque quisquam architecto earum facere ipsum aut impedit omnis!"
          />
        )}
      </div>
    </>
  );
};

export default Modals;
