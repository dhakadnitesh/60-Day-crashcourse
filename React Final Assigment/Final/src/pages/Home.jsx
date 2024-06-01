import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "./Home.css";

export default function Home() {
  let navigate = useNavigate();
  return (
    <>
      <Button
        colorScheme="orange"
        variant="solid"
        m="30px"
        onClick={function () {
          navigate("/about");
        }}
      >
        Go To The About Page
      </Button>

      <div id="home">
        <h3>Introduction on Nature</h3>
        <p id="p1">
          Nature refers to everything in the world that is not created by
          humans, encompassing all living and non-living things as well as the
          physical landscapes and natural phenomena. It includes plants,
          animals, and other organisms that grow, reproduce, and form
          ecosystems. Non-living elements such as water, air, minerals, and soil
          are integral parts of nature, providing essential resources for life.
          The diverse landscapes, ranging from lush forests and towering
          mountains to vast oceans and arid deserts, shape the physical
          environment we inhabit. Additionally, natural phenomena like weather
          patterns, earthquakes, and volcanic eruptions occur independently of
          human activity, constantly influencing and reshaping the planet.
          Nature is vital for our survival, supplying food, water, and air,
          while also offering beauty, inspiration, and a sense of wonder.
          Preserving nature is crucial for maintaining the delicate balance of
          life on Earth and ensuring a healthy environment for future
          generations.
        </p>
        <div className="home1">
          <div
            className="home2"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3375116/pexels-photo-3375116.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="home2"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="home2"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3181458/pexels-photo-3181458.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="home2"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
