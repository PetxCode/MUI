import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Test3 = () => {
  const { data, isLoading } = useQuery("judith", () => {
    const url = "https://swapi.dev/api/people";
    const res = axios.get(url);
    return res;
  });
  console.log(data);
  return (
    <div>
      <div>This is Query Client Provider</div>

      <div>
        {data?.data.results.map((props, i) => (
          <div key={i}>{props.name} </div>
        ))}
      </div>
    </div>
  );
};

export default Test3;
