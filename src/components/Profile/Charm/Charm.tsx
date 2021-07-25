import styled from "styled-components";
import { UserDataType } from "../../../util/type/UserDataType";
import { SubTitle, TagArea, TagDiv, TagsArea } from "../ProfileStyle";

interface CharmProps {
  data: UserDataType | undefined;
}

const Charm = ({ data }: CharmProps) => {
  return (
    <CharmArea>
      <SubTitle>매력 포인트</SubTitle>
      <TagArea>
        {data?.charm.map((item, key) => (
          <TagDiv key={key}>{item}</TagDiv>
        ))}
      </TagArea>
    </CharmArea>
  );
};

const CharmArea = styled(TagsArea)`
  padding-top: 0.5rem;
  border-top: 1px solid #00000092;
`;

export default Charm;
