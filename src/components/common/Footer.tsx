import { AiOutlineHome } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import { BsHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

import { FiUser } from "react-icons/fi";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterArea>
      <IconArea>
        <StyledLink to="/" activeClassName="selected">
          <AiOutlineHome />
        </StyledLink>
      </IconArea>
      <IconArea>
        <StyledLink to="/menu" activeClassName="selected">
          <TiThMenuOutline />
        </StyledLink>
      </IconArea>
      <IconArea>
        <StyledLink to="/like" activeClassName="selected">
          <BsHeart />
        </StyledLink>
      </IconArea>
      <IconArea>
        <StyledLink to="/chat" activeClassName="selected">
          <VscComment />
        </StyledLink>
      </IconArea>
      <IconArea>
        <StyledLink to="/profile" activeClassName="selected">
          <FiUser />
        </StyledLink>
      </IconArea>
    </FooterArea>
  );
};

const FooterArea = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  &.${(props) => props.activeClassName} {
    color: #fe0158;
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
