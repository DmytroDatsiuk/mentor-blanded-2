import { Backdrop, Button, Img, ModalBox } from './Modal.styled';

export const Modal = ({ currentAvatar: { src, alt }, closeModal }) => {
  return (
    <Backdrop>
      <ModalBox>
        <Img src={src} alt={alt} />
        <Button onClick={closeModal}>Closed</Button>
      </ModalBox>
    </Backdrop>
  );
};
