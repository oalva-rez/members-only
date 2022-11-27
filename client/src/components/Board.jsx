import React from "react";

export default function Board({ board }) {
  return (
    <div>
      <h1>{board.title}</h1>
      <p>{board.time}</p>
      <p>{board.description}</p>
    </div>
  );
}
