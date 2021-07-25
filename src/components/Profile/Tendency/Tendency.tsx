import { UserDataType } from "../../../util/type/UserDataType";
import { Content, ContentArea, Contents, SubTitle } from "../ProfileStyle";

interface TendencyProps {
  data: UserDataType | undefined;
}

const Tendency = ({ data }: TendencyProps) => {
  return (
    <ContentArea>
      <Contents>
        <SubTitle>성격</SubTitle>
        <SubTitle>종교</SubTitle>
        <SubTitle>음주</SubTitle>
        <SubTitle>흡연</SubTitle>
        <SubTitle>혈액형</SubTitle>
        <SubTitle>인종</SubTitle>
      </Contents>
      <Contents right={true}>
        <Content>
          {data?.personality.map((item, key) => (
            <span key={key}>{item} </span>
          ))}
        </Content>
        <Content>{data?.religion}</Content>
        <Content>{data?.bear}</Content>
        <Content>{data?.smoking}</Content>
        <Content>{data?.bloodType}</Content>
        <Content>{data?.race}</Content>
      </Contents>
    </ContentArea>
  );
};

export default Tendency;
