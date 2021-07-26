import { useState } from "react";
import styled from "styled-components";
import ModalType from "../../../util/enum/ModalType";
import { UserDataType } from "../../../util/type/UserDataType";
import { CustomInput, CustomProfileBtn } from "../ProfileStyle";

interface IntroProps {
  data: UserDataType | undefined;
  input: string;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  onChangeInput: (value: string | Date, name: string) => void;
}

const Intro = ({
  data,
  input,
  modal,
  setModal,
  modalType,
  setModalType,
  onChangeInput,
}: IntroProps) => {
  return (
    <IntroArea>
      <IntroAreaMargin>
        <h4>소개</h4>
        {modal && modalType === ModalType.INTRO ? (
          <IntroModifyArea>
            <CustomInput
              value={input}
              type="text"
              placeholder="회원님의 매력을 간단하게 소개해주세요"
              name="intro"
              onChange={(e) => {
                onChangeInput(e.target.value, e.target.name);
              }}
            />
            <IntroBtn onClick={() => setModal(false)}>완료</IntroBtn>
          </IntroModifyArea>
        ) : (
          <span
            onClick={() => {
              setModalType(ModalType.INTRO);
              setModal(true);
            }}
          >
            {data?.intro}
          </span>
        )}
        <span>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</span>
      </IntroAreaMargin>
    </IntroArea>
  );
};

const IntroAreaMargin = styled.div`
  display: flex;
  margin-left: 0.5rem;
  flex-direction: column;
`;

const IntroArea = styled.div`
  padding: 1rem 0;
  border-top: 1px solid #00000092;
`;

const IntroModifyArea = styled.div`
  display: flex;
  align-items: center;
`;

const IntroBtn = styled(CustomProfileBtn)`
  width: auto;
  padding: 5px 0.7rem;
  margin-left: 0.5rem;
`;

export default Intro;
