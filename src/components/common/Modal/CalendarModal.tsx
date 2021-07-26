import Calendar from "react-calendar";
import styled from "styled-components";
import { Background } from "../../Profile/ProfileStyle";
import "react-calendar/dist/Calendar.css";

interface CalendarModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarModal = ({ setModal, date, setInput }: CalendarModalProps) => {
  const changeInput = (e: Date) => {
    const year = e.getFullYear();
    const month = e.getMonth() + 1;
    const day = e.getDate();
    const date = year + "-" + month + "-" + day;
    setInput(date);
    setModal(false);
  };
  return (
    <>
      <Background onClick={() => setModal(false)} />
      <CustomDataPicker value={new Date(date)} onChange={changeInput} />
    </>
  );
};

const CustomDataPicker = styled(Calendar)`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80% !important;
  min-width: 17rem;
`;

export default CalendarModal;
