import { useContext } from "react";
import AppContext from "../context/AppContext";

function LonelyButton() {
  const { fetchJoke } = useContext(AppContext);

  return <button onClick={fetchJoke}>I'm feeling Lonely!</button>;
}

export default LonelyButton;
