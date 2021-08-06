import React, { useState, useEffect } from "react";
import "./results.css";
import requests from "../requests";
import axiosConfig from "../axiosConfig";
import Searchbar from "../Components/Searchbar/Searchbar";
import Rows from "../Components/Rows/Rows";

const ResultsPage = ({ props, setVideoId }) => {
  const [results, setResults] = useState([]);
  const { search } = props.match.params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosConfig.get(
        `${requests.fetchVideosByQuery}${search}`
      );
      setResults(response.data);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <Searchbar />
      <Rows videos={results} setVideoId={setVideoId} />
    </>
  );
};

export default ResultsPage;
