import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  const selectOption = (event) => {
    setNum(event.target.value);
  };

  return (
    <>
      <h1>
        You choose <span style={{ color: "salmon" }}>{num}</span>
      </h1>
      <h1>
        My name is <span style={{ color: "salmon" }}>{name}</span>
      </h1>
      <h1>
        I have <span style={{ color: "salmon" }}>{moves}</span> moves
      </h1>

      <select value={num} onChange={selectOption}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
    </>
  );
};

export default Pokemon;
