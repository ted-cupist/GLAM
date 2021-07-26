import styled from "styled-components";
import UserImg from "../../../assets/img/userimg.png";
import { BasicDiv } from "../ProfileStyle";

interface ProfileImgProps {}

const ProfileImg = ({}: ProfileImgProps) => {
  return (
    <>
      <ImgArea>
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
        <CustomImg src={UserImg} alt="" />
      </ImgArea>
      <SpanArea>
        <BasicDiv>얼굴이 선명히 보이는 사진으로 올려주세요</BasicDiv>
        <CustomA href="http://www.glam.am/guide_line/ko/?fbclid=IwAR1o58GoKQaYALG3FQhFQkvCpq7IM3UedviFyCPETHv8D6gojm9F0Zr1Bxg">
          더 알아보기
        </CustomA>
      </SpanArea>
    </>
  );
};

const ImgArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CustomImg = styled.img`
  width: 30%;
  margin: 5px;
  flex-grow: 1;
`;
const CustomA = styled.a`
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 0.5rem;
  color: black;
`;

const SpanArea = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProfileImg;
