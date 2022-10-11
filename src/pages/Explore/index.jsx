import React from "react";
import styled from "styled-components";
import Explore from "./components/Explore";

import { Form, FormControl, Button, Card } from "react-bootstrap";
const MainWrapper = styled.div`
  margin-top: 55px;
`;

const Index = () => {
  return (
    <MainWrapper>
 <Card body className="mt-10">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Card>
      <Explore />
    </MainWrapper>
  );
};

export default Index;
