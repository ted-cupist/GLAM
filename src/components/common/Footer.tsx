import { AiOutlineHome } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import { BsHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterArea>
      <IconArea>
        <ClickAreaIcon>
          <AiOutlineHome />
        </ClickAreaIcon>
      </IconArea>
      <IconArea>
        <ClickAreaIcon>
          <TiThMenuOutline />
        </ClickAreaIcon>
      </IconArea>
      <IconArea>
        <ClickAreaIcon>
          <BsHeart />
        </ClickAreaIcon>
      </IconArea>
      <IconArea>
        <ClickAreaIcon></ClickAreaIcon>
        <VscComment />
      </IconArea>
      <IconArea>
        <ClickAreaIcon></ClickAreaIcon>
        <FiUser />
      </IconArea>
    </FooterArea>
  );
};

const FooterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding-bottom: 0.5rem;
`;

const ClickAreaIcon = styled.div`
  cursor: pointer;
  & :hover {
    color: gray;
  }
`;

const IconArea = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export default Footer;
