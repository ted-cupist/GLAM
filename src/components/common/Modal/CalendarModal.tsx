import { DatePicker } from "react-rainbow-components";
import styled from "styled-components";
import { Background } from "../../Profile/ProfileStyle";

interface CalendarModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date;
  setInput: (value: string | Date, name: string) => void;
}

const CalendarModal = ({ setModal, date, setInput }: CalendarModalProps) => {
  return (
    <>
      <Background onClick={() => setModal(false)} />
      <CustomDataPicker
        formatStyle="medium"
        value={date}
        label="DatePicker Label"
        name="birth"
        onChange={(e) => {
          setInput(e, "birth");
        }}
      />
    </>
  );
};

const CustomDataPicker = styled(DatePicker)`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80% !important;
  min-width: 17rem;
`;

export default CalendarModal;
