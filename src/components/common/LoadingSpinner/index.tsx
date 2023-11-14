import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`;

const LoadingSpinner: React.FC = () => (
  <LoadingContainer>
    <CircularProgress />
    <Typography variant="body2">Loading...</Typography>
  </LoadingContainer>
);

export default LoadingSpinner;
