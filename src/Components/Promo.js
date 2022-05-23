import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function HowToModal({ isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent p={"6"}>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              width="1200"
              height="620"
              src="https://www.youtube.com/embed/En3vMgjk5bE?modestbranding=1&showinfo=0&controls=0&loop=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default HowToModal;
