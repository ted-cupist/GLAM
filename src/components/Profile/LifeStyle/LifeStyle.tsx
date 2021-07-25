import { UserDataType } from "../../../util/type/UserDataType";
import { SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";

interface LifeStyleProps {
  data: UserDataType | undefined;
}

const LifeStyle = ({ data }: LifeStyleProps) => {
  return (
    <TagsArea>
      <SubTitle>라이프 스타일</SubTitle>
      <TagArea>
        {data?.lifeStyle.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
      </TagArea>
    </TagsArea>
  );
};

export default LifeStyle;
