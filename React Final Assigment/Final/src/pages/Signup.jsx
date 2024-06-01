import { Container,VStack,Button,Input } from "@chakra-ui/react"
import { useState } from "react"

export default function Signup(){

    let [user,setuser] = useState({name:"",password:""})

    let handlechange=(e)=>{
        // setuser({...user,[e.target.name]:e.target.value})
        console.log({[e.target.name]:e.target.value})
        
    }
    return (
        <>
        <Container border="2px solid red" mt="30px" p="20px" borderRadius="20px">
            <VStack spacing="20px" mt="20px">
            <Input placeholder='Enter Name...' name="name" value={user.name} onChange={(e)=>handlechange(e.target.value)}/>
            <Input placeholder='Enter Password...' name="password" value={user.password} onChange={(e)=>handlechange(e.target.value)} />
            <Button colorScheme="red" variant="outline">Submit</Button>
            </VStack>
        </Container>
        
        </>
    )
}