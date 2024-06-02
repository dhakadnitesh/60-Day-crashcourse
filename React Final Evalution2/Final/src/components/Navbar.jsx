import { Link } from "react-router-dom";
import { Flex,Button } from "@chakra-ui/react";
import { useContext } from "react";
// import { AuthContext } from "../context/AuthContextProvider";
import { AuthContext } from "../context/AuthContextProvider";


export default function Navbar() {
  const {logout} = useContext(AuthContext);

  return (
    
      <Flex
        align="center"
        justify="space-evenly"
        p="4"
        shadow="md"
        bg="red.600"
      >
        <Link to="/" style={{ color: "white",fontFamily:"sans-serif" }}>
          Home
        </Link>
        <Link to="/Products/Details/:id" style={{ color: "white",fontFamily:"sans-serif" }}>
          ProductsDetails
        </Link>
       
       
        <Link to="/login" style={{ color: "white",fontFamily:"sans-serif" }}>
          Login
        </Link>

        <Button variant="outline" colorScheme="white" onClick={logout}>
        LOGOUT
      </Button>
      </Flex>
    
  );
}
