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
      <StyledLink
        exact
        to="/"
        className="notSelected"
        activeClassName="selected"
      >
        <AiOutlineHome />
      </StyledLink>
      <StyledLink to="/menu" className="notSelected" activeClassName="selected">
        <TiThMenuOutline />
      </StyledLink>
      <StyledLink to="/like" className="notSelected" activeClassName="selected">
        <BsHeart />
      </StyledLink>
      <StyledLink to="/chat" className="notSelected" activeClassName="selected">
        <VscComment />
      </StyledLink>
      <StyledLink
        to="/profile"
        className="notSelected"
        activeClassName="selected"
      >
        <FiUser />
      </StyledLink>
    </FooterArea>
  );
};

const FooterArea = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 1.5rem;
  transition: 0.2s;
  &.${(props) => props.activeClassName} {
    color: #fe0158;
  }
  &:hover {
    color: #e93876;
  }
`;

export default Footer;
