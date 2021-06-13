import React, { useContext, useState } from "react";

// React-strap
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

// Axios
import Axios from "axios";

// Components
import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";

// Context
import { UserContext } from "../Context/UserContext";

// Toast
import { toast } from "react-toastify";

// Redirect
import { Redirect } from "react-router";
const Home = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("unable to locate User", {
        type: "error",
      });
    }
    if (!context.user?.uid) {
      return <Redirect to="/signin" />;
    }
  };

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
