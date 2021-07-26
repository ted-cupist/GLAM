import styled from "styled-components";

export const BasicDiv = styled.div`
  margin-left: 0.5rem;
  font-size: 13px;
  width: auto;
`;

export const ContentArea = styled.div`
  display: flex;
  border-top: 1px solid #00000092;
  padding: 1rem 0;
`;

export const Contents = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 3.5rem;
  ${(props) => props.right && "margin-left:2rem"}
`;

export const SubTitle = styled(BasicDiv)`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

export const Content = styled(SubTitle)<{ change?: boolean }>`
  ${(props) => props.change && "font-color:black"}
  color: #1c9dea;
  & span {
    cursor: pointer;
  }
`;

export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagDiv = styled.div`
  color: #1c9dea;
  border: 1px solid #1c9dea;
  padding: 3px 1rem;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  border-radius: 5px;
`;

export const TagsArea = styled.div`
  margin: 0.5rem 0;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: #00000039;
`;

export const BasicModalStyle = styled.div`
  z-index: 101;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 17rem;
  display: flex;
  align-items: center;
`;

export const ModalTitle = styled.h4`
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
`;

export const SelectArea = styled.div`
  width: 90%;
  overflow-y: scroll;
  height: 10rem;
  display: flex;
  flex-direction: column;
`;

export const SelectSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  padding: 0.4rem 0;
`;

export const SelectedSpan = styled(SelectSpan)`
  color: #1c9dea;
`;

export const CustomInput = styled.input`
  width: 80%;
  border-radius: 2px;
  background: #e7e7e742;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  border: 1px solid #e4e4e4;
  outline: none;
`;

export const CustomProfileBtn = styled.button<{ bottom?: boolean }>`
  border: none;
  width: 80%;
  margin-top: 8px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  font-size: 1rem;
  ${(props) =>
    props.bottom && "margin-bottom: 1rem; background : none; font-size:0.8rem;"}
  &:hover {
    ${(props) => !props.bottom && "background :#1c9dea ;"}
  }
  padding: 5px 0;
`;
