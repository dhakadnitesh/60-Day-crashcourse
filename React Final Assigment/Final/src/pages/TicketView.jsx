import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Loading from "../components/Loading";
import Error from "../components/Error";
import {
  Button,
  HStack,
  Card,
  Stack,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Box,
  StackDivider,
  SimpleGrid,
  Container,
  CardFooter,
} from "@chakra-ui/react";

export default function TicketView() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let [Data, setData] = useState({});
  let [error, setError] = useState(false);

  async function fetchdata(id) {
    console.log(id)
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`,
      });

      console.log(res?.data);
      setData(res?.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchdata(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  async function handledelete(){

    setLoading(true)

    try {
        let res = await axios({
            method:"delete",
            url:`http://localhost:3000/tickets/${id}`
        })

        if(res.status===200){
            alert("Deleted Card")
            navigate("/ticket")

        }
        setLoading(false)
    } catch (error) {
        setError(error)
        setLoading(false)
        
    }
    
  }

  let { title, description, assignee, status, priority } = Data;

  return (
    <>
      <Container maxW="container.lg">
        <HStack m="14px" justifyContent="flex-end">
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              navigate("/Ticket/Create");
            }}
          >
            Create Ticket
          </Button>
        </HStack>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={10}
          mt="30px"
        >
          <Card>
            <CardHeader>
              <Heading size="md">{title}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Description
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {description}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Assignee
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {assignee}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Status
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {status}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Priority
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {priority}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter>
              <HStack spacing="10px">
                <Button colorScheme="red" variant="outline" onClick={() => navigate(`/Ticket/Edit/${id}`)}>Edit Ticket</Button>
                <Button  colorScheme="red" variant="outline" onClick={handledelete}>Delete Ticket</Button>
              </HStack>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
}
