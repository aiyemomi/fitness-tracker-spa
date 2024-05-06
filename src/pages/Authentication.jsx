import React, { useState } from "react";
import styled from "styled-components";
import main_img from "../assets/images/fitness-img.jpg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
`;
const Logo = styled.img``;
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
const Text = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;
const TextButton = styled.span`
  color: ${({ theme }) => theme.text_button};
  font-weight: 500;
  cursor: pointer;
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Left>
        {/* At this point is a logo really necessary? */}
        <Logo />
        <Image src={main_img} />
      </Left>
      <Right>
        {login ? (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton
                onClick={() => {
                  setLogin(false);
                }}
              >
                Sign up
              </TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton
                onClick={() => {
                  setLogin(true);
                }}
              >
                Login
              </TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
