import { UserDataType } from "../../../util/type/UserDataType";
import { SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";

interface InterestProps {
  data: UserDataType | undefined;
}

const Interest = ({ data }: InterestProps) => {
  return (
    <TagsArea>
      <SubTitle>관심사</SubTitle>
      <TagArea>
        {data?.interest.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
      </TagArea>
    </TagsArea>
  );
};

export default Interest;
