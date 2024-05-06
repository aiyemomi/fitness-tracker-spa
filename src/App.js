import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./assets/styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Diet from "./pages/Diet";

export const Context = React.createContext();

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user, setUser] = useState(false);
  return (
    <Context.Provider value={[user, setUser]}>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          {user ? (
            <Container>
              <Navbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/diet" element={<Diet />} />
              </Routes>
            </Container>
          ) : (
            <Container>
              <Authentication />
            </Container>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
