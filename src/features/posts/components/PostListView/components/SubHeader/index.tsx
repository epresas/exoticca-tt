import React from "react";
import { Container, Input } from "./SubHeader.styles";

interface SubHeaderProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SubHeader = ({ filter, setFilter }: SubHeaderProps) => {
  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilter(event.target.value);
  };

  return (
    <Container>
      <Input
        label="Filtrar por título"
        variant="outlined"
        value={filter}
        onChange={(e) => handleFilterChange(e)}
        size="small"
        margin="dense"
      />
    </Container>
  );
};

export default SubHeader;
