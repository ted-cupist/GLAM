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
      <FooterWidth>
        <StyledLink
          exact
          to="/"
          className="notSelected"
          activeClassName="selected"
        >
          <AiOutlineHome />
        </StyledLink>
        <StyledLink
          to="/menu"
          className="notSelected"
          activeClassName="selected"
        >
          <TiThMenuOutline />
        </StyledLink>
        <StyledLink
          to="/like"
          className="notSelected"
          activeClassName="selected"
        >
          <BsHeart />
        </StyledLink>
        <StyledLink
          to="/chat"
          className="notSelected"
          activeClassName="selected"
        >
          <VscComment />
        </StyledLink>
        <StyledLink
          to="/profile"
          className="notSelected"
          activeClassName="selected"
        >
          <FiUser />
        </StyledLink>
      </FooterWidth>
    </FooterArea>
  );
};

const FooterArea = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: white;
  box-shadow: rgb(0 0 0 / 5%) 2px 2px 4px 4px;
  display: flex;
  justify-content: center;
`;

const FooterWidth = styled.div`
  max-width: 1200px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
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
