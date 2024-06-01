import axios from "axios";
import {
  Container,
  VStack,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import Error from "../components/Error";
import { useNavigate } from "react-router-dom";

export default function TicketCreate() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [assignee, setAssignee] = useState("");
  let [status, setStatus] = useState("");
  let [priority, setPriority] = useState("");
  let [error, seterror] = useState(false);
  let navigate = useNavigate()

  async function handleCreate() {
    try {
      let objTicket = {
        title: title,
        description: description,
        assignee: assignee,
        status: status,
        priority: priority,
      };

      const res = await axios.post("http://localhost:3000/tickets", objTicket);


      console.log(res?.data);

      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setAssignee("");
      setStatus("");
      setPriority("");

      if(res.status===201){
        alert("Ticket Created")
       navigate("/ticket")
      }

      seterror(false);
    } catch (error) {
      seterror(true);
    }
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Container>
        <VStack spacing="20px" mt="30px">
          <Input
            placeholder="Enter Title"
            size="lg"
            value={title}
            onChange={function (e) {
              setTitle(e.target.value);
            }}
          />
          {/* inputbox */}
          <Textarea
            placeholder="Enter Description"
            size="lg"
            value={description}
            onChange={function (e) {
              setDescription(e.target.value);
            }}
          />
          {/* textarea */}
          <Select
            placeholder="Select Assignee"
            size="lg"
            value={assignee}
            onChange={function (e) {
              setAssignee(e.target.value);
            }}
          >
            <option value="Rahul">Rahul</option>
            <option value="Abu">Abu</option>
            <option value="Rihan">Rihan</option>
            <option value="Rohan">Rohan</option>
            <option value="Meenu">Meenu</option>
          </Select>
          {/* select for Assinee */}

          <Select
            placeholder="Select Status"
            size="lg"
            value={status}
            onChange={function (e) {
              setStatus(e.target.value);
            }}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Progress">Progress</option>
          </Select>
          {/* select for status */}
          <Select
            placeholder="Select Priority"
            size="lg"
            value={priority}
            onChange={function (e) {
              setPriority(e.target.value);
            }}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
            <option value="7">Option 7</option>
            <option value="8">Option 8</option>
            <option value="9">Option 9</option>
          </Select>
          {/* select for protity */}

          <Button colorScheme="red" variant="outline" onClick={handleCreate}>
            Create Ticket
          </Button>
        </VStack>
      </Container>
    </>
  );
}
