import styles from './index.module.css';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  overlayToggle: () => void;
}

export const DropdownMenuButton = ({
  isOpen,
  toggle,
  overlayToggle,
}: IProps) => {
  let openButton = isOpen && styles.buttonOpen;

  const onClickBtn = () => {
    toggle();
    overlayToggle();
  };

  return (
    <button
      type='button'
      className={`${styles.button} ${openButton}`}
      onClick={onClickBtn}>
      <span>Click</span>
    </button>
  );
};
