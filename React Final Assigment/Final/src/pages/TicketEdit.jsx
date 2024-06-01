

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function TicketEdit() {
  let { id } = useParams();
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState({});
  let [error, setError] = useState(false);

  async function fetchData(id) {
    setLoading(true);
    setError(false); 
    console.log(id)
    try {
      let res = await axios.get(`http://localhost:3000/tickets/${id}`);
      setData(res.data);
      console.log(res.data)
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <><div>
        <h2>Ticket ID: {data.id}</h2>
        <p>{data.description}</p>
        {/* Add more fields and form inputs as needed */}
      </div>
    </>
  );
}
