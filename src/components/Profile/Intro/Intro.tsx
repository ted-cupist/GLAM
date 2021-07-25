import styled from "styled-components";
import { UserDataType } from "../../../util/type/UserDataType";

interface IntroProps {
  data: UserDataType | undefined;
}

const Intro = ({ data }: IntroProps) => {
  return (
    <IntroArea>
      <h4>소개</h4>
      {!data?.intro ? (
        <IntroInput
          type="text"
          placeholder="회원님의 매력을 간단하게 소개해주세요"
          onChange={(e) => {}}
        />
      ) : (
        <span>{data?.intro}</span>
      )}
      <span>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</span>
    </IntroArea>
  );
};
const IntroArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroInput = styled.input``;

export default Intro;
