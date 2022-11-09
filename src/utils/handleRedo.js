const handleRedo = (gameData, updateGame) => {
  if (gameData.isReplaying) return;
  updateGame((prevGameData) => ({
    ...prevGameData,
    ...gameData.redo,
    undo: {
      board: prevGameData.board,
      score: prevGameData.score,
      bestScore: prevGameData.bestScore,
      replay: prevGameData.replay,
    },
    redo: undefined,
  }));
};

export default handleRedo;
