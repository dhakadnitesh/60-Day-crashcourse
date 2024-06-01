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
  Select,
  CardFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import axios from "axios";

export default function Ticket() {
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let [Data, setData] = useState([]);
  let [error, setError] = useState(false);
  let [status, setStatus] = useState("");
  let [priority, setPriority] = useState("");

  // Handle btn
  function handleBtn() {
    navigate("/Ticket/Create");
  }

  // Handle btn1
  function handleBtn1(id) {
    navigate(`/Ticket/View/${id}`);
    console.log("hello");
  }

  async function fetchData(status, priority) {
    setLoading(true);
    try {
      let queryParams = {};
      if (status) {
        queryParams.status = status;
      }
      if (priority) {
        queryParams._sort = "priority";
        queryParams._order = priority;
      }

      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets`,
        params: queryParams,
      });

      setData(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    console.log(
      "Fetching data with status:",
      status,
      "and priority:",
      priority
    );
    fetchData(status, priority);
  }, [status, priority]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Container maxW="container.lg">
        <HStack m="14px" justifyContent="flex-end">
          <Button colorScheme="teal" variant="solid" onClick={handleBtn}>
            Create Ticket
          </Button>
        </HStack>

        <Select
          placeholder="Filter By Status"
          mb="20px"
          width="300px"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Progress">In Progress</option>
        </Select>

        <Select
          placeholder="Select By Priority"
          width="300px"
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="desc">High To Low</option>
          <option value="asc">Low To High</option>
        </Select>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={10}
          mt="30px"
        >
          {Data.map((ticket) => (
            <Card key={ticket.id}>
              <CardHeader>
                <Heading size="md">{ticket.title}</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Status
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {ticket.status}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Priority
                    </Heading>
                    <Text pt="2" fontSize="sm">
                    {ticket.priority}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>

              <CardFooter>
                <Button
                  variant="outline"
                  colorScheme="red"
                  onClick={() => handleBtn1(ticket.id)}
                >
                  View Ticket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
