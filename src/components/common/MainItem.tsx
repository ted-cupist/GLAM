import styled from "styled-components";
import { MainItemType } from "../../util/type/DataType";
import { ReactComponent as BeLikeSvg } from "../../assets/img/BeLikeIcon.svg";
import { AiFillStar } from "react-icons/ai";
import StatusUpdate from "../../util/enum/StatusUpdate";
import { useEffect } from "react";

interface MainItemProps {
  data: MainItemType;
  handleUpdateBtn: (idx: number, type: StatusUpdate) => void;
}

const MainItem = ({ data, handleUpdateBtn }: MainItemProps) => {
  useEffect(() => {});
  return (
    <MainItemArea>
      <CustomImg src={data.img} />
      <UserDataArea>
        <Name>
          {data.name}, {data.age}
        </Name>
        <TagsArea>
          {data.tag.map((item, key) => (
            <Tag key={key}>{item}</Tag>
          ))}
        </TagsArea>
        <UpdateBtn>
          <BeLikeBtnArea
            onClick={() => {
              handleUpdateBtn(data.idx, StatusUpdate.DELETE);
            }}
          >
            <BeLikeBtn />
          </BeLikeBtnArea>
          <LikeBtnArea
            onClick={() => {
              handleUpdateBtn(data.idx, StatusUpdate.LIKE);
            }}
          >
            <LikeBtnSpan>좋아요</LikeBtnSpan>
          </LikeBtnArea>
          <BeLikeBtnArea
            star={true}
            onClick={() => {
              handleUpdateBtn(data.idx, StatusUpdate.FAVORITE);
            }}
          >
            <StarIcon />
          </BeLikeBtnArea>
        </UpdateBtn>
      </UserDataArea>
    </MainItemArea>
  );
};

const LikeBtnSpan = styled.span`
  padding: 0.5rem 0rem;
  color: white;
`;

const StarIcon = styled(AiFillStar)`
  font-size: 1.5rem;
  color: white;
`;

const LikeBtnArea = styled.div`
  width: 65%;
  cursor: pointer;
  background: #1c9dea;
  display: flex;
  justify-content: center;
`;

const UpdateBtn = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BeLikeBtnArea = styled.div<{ star?: boolean }>`
  width: 15%;
  background: #424242;
  ${(props) => props.star && "background: #1c9dea;"}
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: auto;
  border-radius: 5px;
`;

const BeLikeBtn = styled(BeLikeSvg)`
  fill: gray;
  width: 1.5rem;
  height: 1.5rem;
`;

const TagsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin-top: 0.3rem;
  background: #000000ac;
  color: white;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 3px 5px;
`;

const UserDataArea = styled.div`
  padding-left: 0.5rem;
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0;
  width: 95%;
`;

const Name = styled.h2`
  color: white;
`;

const MainItemArea = styled.div`
  height: 28rem;
  width: 31%;
  margin-left: 1rem;
  ${({ theme }) => theme.device?.smallDesktop} {
    width: 48%;
    margin-left: 0.5rem;
  }
  ${({ theme }) => theme.device?.mobile} {
    width: 95%;
    margin-left: 0;
  }
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
`;

export const CustomImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

export default MainItem;
