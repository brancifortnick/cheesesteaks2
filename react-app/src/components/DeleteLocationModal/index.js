import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteEstablishment from "../DeleteEstablishment";
function DeleteAlbumModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete Establishment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteEstablishment />
        </Modal>
      )}
    </>
  );
}
export default DeleteAlbumModal;
