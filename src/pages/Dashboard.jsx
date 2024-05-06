import React, { useState } from "react";
import styled from "styled-components";
import { body_data, weekly_stat_data } from "../assets/data";
import CountsCard from "../components/cards/CountsCard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div``;
const TitleSection = styled.div`
  /* padding: 0px 16px; */
`;
const Title = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const Desc = styled.p``;
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
`;
const NotificationContainer = styled.div`
  width: min-content;
  border: 1px solid transparent;
  background: rgba(51, 170, 51, 0.1);
  border-radius: 8px;
  padding: 8px;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 840px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  return (
    <Container>
      <Wrapper>
        <HeaderSection>
          <Left>
            <TitleSection>
              <Title>Hello, name</Title>
              <Desc>Keep Moving & Stay Healthy</Desc>
            </TitleSection>
          </Left>
          <Right>
            <NotificationContainer>
              <NotificationsIcon />
            </NotificationContainer>
          </Right>
        </HeaderSection>
        <FlexWrap>
          {body_data.map((item) => (
            <CountsCard item={item} />
          ))}
        </FlexWrap>
        <FlexWrap>
          <WeeklyStatCard data={weekly_stat_data} />
          <CategoryChart data={weekly_stat_data} />
          <AddWorkout setWorkout={setWorkout} />
        </FlexWrap>

        <Section>
          <Title>Todays Workouts</Title>
          <CardWrapper>
            <WorkoutCard workout={workout} />
            <WorkoutCard workout={workout} />
            <WorkoutCard workout={workout} />
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
