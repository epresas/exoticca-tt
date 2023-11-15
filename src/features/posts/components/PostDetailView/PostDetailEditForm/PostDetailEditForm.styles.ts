import { TextField } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.article`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.surface[200]};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  position: relative;
  min-width: 360px;
  max-width: 640px;
`;
export const Header = styled.header`
  display: flex;
  place-content: center;
  place-items: center;
`;
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.basics[100]};
`;
export const Body = styled.section``;
export const Text = styled.p``;
export const Form = styled.form``;
export const FormFieldWrapper = styled.div`
  width: 100%;
`;
export const FormField = styled(TextField)`
  width: 100%;
  &:not(last-child) {
    margin-bottom: 1rem;
  }
  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
  & .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.surfaceMixed[600]};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-family: ${({ theme }) => theme.fonts.primary};
  }
`;

export const Footer = styled.footer`
  margin-top: 1rem;
  display: flex;
  justify-content: end;
`;

const ActionButton = styled.button`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.surfaceMixed[200]};
  cursor: pointer;
  padding: 0.5rem 1rem;
  min-width: 80px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const AcceptButton = styled(ActionButton)`
  margin-right: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary[500]};
  &:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.greenDark};
  }
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.greenLight};
    color: ${({ theme }) => theme.colors.surfaceMixed[100]};
  }
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.surfaceMixed[600]};
    border-color: ${({ theme }) => theme.colors.surfaceMixed[600]};
    color: ${({ theme }) => theme.colors.surfaceMixed[100]};
  }
`;

export const CloseButton = styled(ActionButton)``;
