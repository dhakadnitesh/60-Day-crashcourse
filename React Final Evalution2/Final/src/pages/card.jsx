import Error from "../components/Error";
import Loading from "../components/Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
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

export default function CardPage(){
    let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let {id} = useParams()
  let navigate = useNavigate()

  async function ProductData(id){
    setLoading(true)
    try {

        let res = await axios({
            method:"get",
            url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
        })

        setProduct(res.data.data)
        
        setLoading(false)
        setError(false)
        
    } catch (error) {
        setLoading(false)
        setError(true)
        
    }

  }

  useEffect(()=>{
    ProductData(id)

  },[id])

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  let {brand,title,image,category,price} = product
  console.log(product)

 

    return (
        <>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} m="30px">
      <Card id="card1">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <img src={image} alt="logo" style={{ width: "60%",borderRadius:"7px" }} id="img1" />
            </Box>
            <Box>
              <Text pt="2" fontSize="md" fontFamily="serif" fontWeight="600">
                Brand: {brand}
              </Text>
            </Box>
            <Box>
              <Text pt="2" fontSize="md" fontFamily="serif" fontWeight="600">
                Title: {title}
              </Text>
            </Box>
            <Box>
              <Text pt="2" fontSize="md" fontFamily="serif" fontWeight="600">
                Category: {category}
              </Text>
            </Box>
           
            <Box>
              <Text pt="2" fontSize="sm" color="green" fontFamily="cursive">
                Price: {price}
              </Text>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="blue" size="sm" >
            Remove To Card
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>

</>
    )
}