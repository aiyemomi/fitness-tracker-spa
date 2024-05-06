import React, { useState, useContext } from "react";
import styled from "styled-components";
import logo from "../assets/images/logos.jpg";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Context } from "../App";

const NavMain = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;
const Logo = styled.img`
  height: 24px;
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1px solid;
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${(theme) => theme.black};
  @media (max-width: 768px) {
    display: flex;
  }
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 26px;
  color: ${({ theme }) => theme.primary};
  align-items: center;
  padding: 0px 6px;
`;

const LogoutButton = styled(Link)`
  color: ${({ theme }) => theme.secondary};
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  text-align: end;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const MobileMenu = styled.ul`
   background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  top: 80px;
  left: 15px;
  list-style: none;
  position: absolute;
  width: 95%;
  padding: 12px 40px 24px 0px;
  transition: all 0.5s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useContext(Context);
  return (
    <NavMain>
      <NavContainer>
        <MobileIcon
          onClick={() => {
            setIsOpen((prevalue) => !prevalue);
          }}
        >
          <MenuIcon sx={{ color: "black" }} />
        </MobileIcon>

        <NavLogo to="/">
          <Logo src={logo} />
          My-Fitness
        </NavLogo>
        <MobileMenu isOpen={isOpen}>
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/workouts">Workouts</NavItem>
          <NavItem to="/diet">Diet</NavItem>
          <NavItem to="/blogs">Blogs</NavItem>
        </MobileMenu>
        <NavItems>
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/workouts">Workouts</NavItem>
          <NavItem to="/diet">Diet</NavItem>
          <NavItem to="/blogs">Blogs</NavItem>
        </NavItems>
        <UserContainer>
          <Avatar />
          <LogoutButton onClick={() => setUser(false)}>Logout</LogoutButton>
        </UserContainer>
      </NavContainer>
    </NavMain>
  );
};

export default Navbar;
