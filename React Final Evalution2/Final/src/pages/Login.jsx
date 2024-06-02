import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Container,
} from "@chakra-ui/react";
import { useState, useContext, useRef, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const {
    login,
    authDetails: { isLoggedIn },
  } = useContext(AuthContext);

  async function handleClick() {
    try {
      let resp = await axios({
        method: "post",
        url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        data: {
          email,
          password,
        },
      });

      login(resp?.data?.token);
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

 

  return (
    <Container maxW={"600px"}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Login Page
        </Heading>

        <Input
         
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
        
        type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="outline" colorScheme="red" onClick={handleClick}>
          LOGIN
        </Button>
      </VStack>
    </Container>
  );
}
