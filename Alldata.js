import { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import "./style.css";


export default function Alldata() {
  const [data, setData] = useState([]);

  //strapi
  let url = "http://localhost:1337/api/banks";
  useEffect(() => {
    async function fetchdata() {
      try {
        let res = await axios(url);
        let result = res.data;
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [url]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData(prevState => ({
        ...prevState,
        data: prevState.data.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="a1">
      <div className="alldata">
        <h1 className="alldata-h1">Alldata</h1>
        {data && data.data && data.data.map((item, key) => (
          <Card className="alldatacard" key={key}>
            <Card.Header>User{key + 1}</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>{item.attributes.name}</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                name: {item.attributes.name}<br />
                email: {item.attributes.email}<br />
                balance: {item.attributes.balance}<br />
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

