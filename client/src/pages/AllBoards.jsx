import React, { useState } from "react";
import Board from "../components/Board";
export default function AllBoards({ isAdmin }) {
  console.log("isAdmin", isAdmin);
  const [boards, setBoards] = useState([
    {
      id: 1,
      time: "2021-03-01T00:00:00.000Z",
      title: "Board 1",
      description: "This is the first board.",
    },
    {
      id: 2,
      time: "2021-03-01T00:00:00.000Z",
      title: "Board 2",
      description: "This is the second board.",
    },
    {
      id: 3,
      time: "2021-03-01T00:00:00.000Z",
      title: "Board 3",
      description: "This is the third board.",
    },
  ]);
  return (
    <div>
      <h1>Boards</h1>
      <ul>
        {boards.map((board) => {
          return <Board board={board} key={board.id} />;
        })}
      </ul>
    </div>
  );
}
