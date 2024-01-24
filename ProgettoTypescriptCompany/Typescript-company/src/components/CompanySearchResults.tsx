import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

interface JobData {
  _id: string;
  company_name: string;
  url: string;
  title: string;
  // Aggiungi altri tipi necessari per i dati dei lavori
}

interface CompanySearchResultsProps {}

const CompanySearchResults: React.FC<CompanySearchResultsProps> = () => {
  const [jobs, setJobs] = useState<JobData[]>([]);
  const params = useParams<{ company: string }>();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
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
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;