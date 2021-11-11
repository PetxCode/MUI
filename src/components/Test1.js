import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Test1 = () => {
  const [count, setCount] = React.useState(1);
  const { data, isLoading } = useQuery(["judith", count], () => {
    const url = `https://swapi.dev/api/planets/?page=${count}`;
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
      <br />
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setCount((el) => Math.max(el - 1, 1));
          }}
        >
          PREV
        </button>
        <div>You are in PAGE: {count}</div>
        <button
          onClick={() => {
            setCount((el) => el + 1);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Test1;
