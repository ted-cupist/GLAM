import styled from "styled-components";
import UserImg from "../../../assets/img/userimg.png";
import ImgInput from "../../common/ImgInput";
import { BasicDiv } from "../ProfileStyle";

interface ProfileImgProps {
  data: string[];
}

const ProfileImg = ({ data }: ProfileImgProps) => {
  return (
    <>
      <ImgArea>
        {data.map((item, key) => (
          <ImgInput item={item} key={key} id={key} />
        ))}
        {[...Array(6 - data.length)].map((item, key) => (
          <ImgInput item={UserImg} key={key} id={key + data.length} />
        ))}
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
