import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());
  const [currentTimeout, setCurrentTimeout] = useState();

  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  if (game.game_over() || game.in_draw())
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5rem",
          }}
        >
          Game over
          <button
            onClick={() => setGame(new Chess())}
            style={{
              fontSize: "2rem",
              borderRadius: "0.5rem",
              backgroundColor: "#282c34",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              position: "relative",
              top: 30,
            }}
          >
            Restart
          </button>
        </div>
      </>
    );

  async function calculateMove() {
    try {
      const response = await fetch(
        "https://chessai-final-thesis.onrender.com/move",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fen: game.fen() }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      safeGameMutate((game) => {
        game.move(data.move);
      });
    } catch (error) {
      console.error("Error fetching move:", error);
    }
  }

  function makeMove() {
    const possibleMoves = game.moves();

    if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
      return;

    calculateMove();
  }

  function onDrop(sourceSquare, targetSquare, piece) {
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1].toLowerCase() ?? "q",
    });
    setGame(gameCopy);

    if (move === null) return false;

    const newTimeout = setTimeout(makeMove, 200);
    setCurrentTimeout(newTimeout);
    return true;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "95%",
          maxHeight: "80vh",
          maxWidth: "80vh",
        }}
      >
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
        <br />
        <div
          style={{
            textAlign: "center",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setGame(new Chess())}
            style={{
              fontSize: "2rem",
              borderRadius: "0.5rem",
              backgroundColor: "#282c34",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Restart
          </button>
          <button
            onClick={() => {
              safeGameMutate((game) => {
                game.undo();
                game.undo();
              });
              clearTimeout(currentTimeout);
            }}
            style={{
              fontSize: "2rem",
              borderRadius: "0.5rem",
              backgroundColor: "#282c34",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Undo
          </button>
        </div>
      </div>
    </div>
  );
}
