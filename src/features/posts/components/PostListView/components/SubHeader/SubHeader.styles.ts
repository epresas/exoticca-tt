// styled component for textfield mui component
import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  place-content: start;
`;

export const Input = styled(TextField)`
  background-color: ${({ theme }) => theme.colors.surfaceMixed[300]};
  width: 360px;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary[200]};

  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
  & .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.basics[100]};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;
