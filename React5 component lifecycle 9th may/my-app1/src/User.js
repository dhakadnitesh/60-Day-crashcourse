import {useState,useEffect} from "react";

function UserData({ user }) {
  return (
    <div className="div2">
      <h3>Name: {user.name}</h3>
      <p> Email: {user.email}</p>
      <p> Address: {user.address.street}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

let Datafetching = () => {
  let [user, setuser] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        let data = await res.json();
        console.log(data);
        setuser(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <>
    
      <h1>User Data</h1>
      <div className="div1">
      {user.map((user) => (
        <UserData key={user.id} user={user} />
      ))}
    </div>
    </>
  );
};

export default Datafetching;