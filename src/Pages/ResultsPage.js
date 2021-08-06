import React, { useState, useEffect } from "react";
import "./results.css";
import requests from "../requests";
import axiosConfig from "../axiosConfig";
import Rows from "../Components/Rows/Rows";

const ResultsPage = ({ setVideoId }) => {
  const [results, setResults] = useState([]);

  const searchParam = window.location.pathname.split("=").slice(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosConfig.get(
        `${requests.fetchVideosByQuery}${searchParam}`
      );
      setResults(response.data);
    };
    fetchData();
  }, [searchParam]);

  return (
    <>
      <Rows videos={results} setVideoId={setVideoId} />
    </>
  );
};

export default ResultsPage;
