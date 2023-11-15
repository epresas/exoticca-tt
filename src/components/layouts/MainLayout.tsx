import styled from "styled-components";

const MainLayout = styled.main`
  display: flex;
  place-content: center;
  place-items: center;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1200px;
  min-width: 980px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface[100]};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export default MainLayout;
