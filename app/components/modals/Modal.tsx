import { Dispatch, SetStateAction } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  body?: React.ReactElement;
  total?: React.ReactElement;
  title?: string;
  setModal: Dispatch<SetStateAction<boolean>>;
  onSubmit?: () => void;
  onGoBack?: () => void;
  disabled?: boolean;
  loading?: boolean;
  btnText?: string;
  btnText2?: string;
}

const Modal: React.FC<ModalProps> = ({
  body,
  title,
  setModal,
  onSubmit,
  total,
  onGoBack,
}) => {
  const handleCloseModal = () => {
    setModal(false);
    document.body.style.overflowY = 'auto';
    if (onGoBack) {
      onGoBack();
    }
  };
  return (
    <div
      className="
          fixed
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          inset-0 
          w-full
          h-full
          z-50
          modal
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
    >
      <div className="w-full h-full">
        <div
          className={`
          relative
          w-[90%]
          md:w-4/6
          lg:w-5/6
          xl:w-4/5
          my-[30px]
          mx-auto 
          h-auto 
          `}
        >
          {/*content*/}
          <div
            className={`
            translate
            duration-150
            h-full
           
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              p-4
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              <div className="mt-4 flex items-center">
                <IoMdClose
                  onClick={() => handleCloseModal()}
                  className="cursor-pointer hover:text-red-600"
                  size={18}
                />
                <p className="text-center font-semibold flex-grow">{title}</p>
              </div>
              <div className="mt-5">
                <div className="max-h-[450px] overflow-x-hidden overflow-y-auto">
                  {body}
                </div>
                <div className="w-full">{total}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
