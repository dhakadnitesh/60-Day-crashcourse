import Error from "../components/Error";
import Loading from "../components/Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    SimpleGrid,
    Card,
    CardBody,
    CardFooter,
    Text,
    Stack,
    Box,
    StackDivider,
    Container,
    Select,
    Button,
    HStack,
  } from "@chakra-ui/react";

function ProductDetailsData({ ele }) {
  let navigate = useNavigate();

  function handleBtn1(id) {
    navigate(`/Products/Details/${id}`);
  }

  return (
    <Card id="card1">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="md" fontFamily="serif" fontWeight="600">
              Title: {ele.title}
            </Text>
          </Box>
          <Box>
            <Text pt="2" fontSize="sm" color="green" fontFamily="cursive">
              Category: {ele.category}
            </Text>
          </Box>
          <Box>
            <Text pt="2" fontSize="sm" color="green" fontFamily="cursive">
              Price: {ele.price}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          size="sm"
          onClick={() => handleBtn1(ele.id)}
        >
          Products Detail Page
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  let [product, setProduct] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [sortByprice, setSortByprice] = useState("");
  let [filterBycategory, setFilterBycategory] = useState("");

  async function ProductData(sortByprice,filterBycategory) {
    setLoading(true);
    try {
      let queryParams = {};
      if (sortByprice) {
        queryParams.sort = "price";
        queryParams.order = sortByprice;
      }
      if (filterBycategory) {
        queryParams.filter = filterBycategory;
      }

      let res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`, {
        params: queryParams,
      });

      setProduct(res.data.data); 
      console.log(res.data.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    ProductData(sortByprice,filterBycategory);
  }, [sortByprice, filterBycategory]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <HStack m="30px" ml="9%" spacing={4}>
        <Select
          placeholder="Filter By Category"
          width="300px"
          onChange={(e) => setFilterBycategory(e.target.value)}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Home Decor</option>
        </Select>

        <Select
          placeholder="Sort By Price"
          width="300px"
          onChange={(e) => setSortByprice(e.target.value)}
        >
          <option value="desc">High To Low</option>
          <option value="asc">Low To High</option>
        </Select>
      </HStack>

      <Container maxWidth="85%" mt="3%" id="container">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {product.map((ele, i) => (
            <ProductDetailsData ele={ele} key={i} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
