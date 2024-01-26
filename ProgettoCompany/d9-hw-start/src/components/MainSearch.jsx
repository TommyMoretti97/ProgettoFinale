import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container >
      <Row>
        <Col xs={10} className="mx-auto my-3">
           <Link to={'/favorites'}><h3 className="btn btn-info">See your favorite list</h3></Link> 
          <h1 className="display-1">Remote Jobs Search</h1>
          <h3>Are you looking for a new job? Don't worry, we'll help you. Enter the name of a company and discover what they are looking for.</h3>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit} >
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
       
        <Col xs={10} className="mx-auto">
         <Row  className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}>
          <Col xs={6} className="h3">Company Name</Col>
          <Col xs={6} className="h3">Rules</Col>
          </Row>
        </Col>
        
        <Col xs={10} className="mx-auto mb-5">
        
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
