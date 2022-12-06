import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../components/userContext";
import "./Rejoindre.css";
const Rejoindre = () => {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  // const handleForm = async (e) => {
  //   e.preventDefault();

  //   if (
  //     (inputs.current[1].value.length || inputs.current[2].value.length) < 6
  //   ) {
  //     setValidation("6 characters min");
  //     return;
  //   } else if (inputs.current[1].value !== inputs.current[2].value) {
  //     setValidation("Passwords do not match");
  //     return;
  //   }

  //   try {
  //     const cred = await signUp(
  //       inputs.current[0].value,
  //       inputs.current[1].value
  //     );
  //     // formRef.current.reset();
  //     setValidation("");
  //     // console.log(cred);
  //     toggleModals("close");
  //   } catch (err) {
  //     if (err.code === "auth/invalid-email") {
  //       setValidation("Email format invalid");
  //     }

  //     if (err.code === "auth/email-already-in-use") {
  //       setValidation("Email already used");
  //     }
  //   }
  // };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };
  return (
    <>
      {modalState.signUpModal && (
        <div
          id="content"
          className="position-fixed top-0 vw-100
           vh-100"
        >
          <div
            onClick={closeModal}
            className="w-100 h-100 bg-  bg-opacity-75"
          ></div>
          <div
            className="position-absolute w-50 top-50 start-50 translate-middle"
            style={{ minWidth: "390px" }}
          >
            <div className="modal-dialog">
              <div
                className="modal-content"
                id={closeModal ? "modal-content" : "modal-content-hide"}
              >
                <div className="modal-header mb-2">
                  <h5 className="modal-title">Rejoindre une réunion</h5>
                  <button onClick={closeModal} className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="text"
                        placeholder="id de la reunion"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="code"
                        placeholder="code secret"
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-primary">Rejoindre</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rejoindre;
