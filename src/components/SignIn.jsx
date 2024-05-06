import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Button from "./Button";
import TextInput from "./TextInput";
import { Context } from "../App";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const TextInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
const ButtonLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;
const Title = styled.h1``;
const CallToAction = styled.p``;

const SignIn = () => {
  const [user, setUser] = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };
  const handleSignIn = () => {
    if (validateInputs()) {
      setUser(true);
    }
  };
  return (
    <div>
      <Container>
        <Title>
          Welcome to my My-fitness <EmojiPeopleIcon />
        </Title>
        <CallToAction>Please login with your details here</CallToAction>
        <TextInputs>
          <TextInput
            label="Email Address"
            placeholder="Enter your email address"
            value={email}
            handelChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Password"
            placeholder="Enter your password"
            password
            value={password}
            handelChange={(e) => setPassword(e.target.value)}
          />
        </TextInputs>
        <ButtonLink
          onClick={() => {
            handleSignIn();
          }}
        >
          <Button
            text="Sign In"
            bgColor={({ theme }) => theme.primary}
            color="white"
          />
        </ButtonLink>
      </Container>
    </div>
  );
};

export default SignIn;
