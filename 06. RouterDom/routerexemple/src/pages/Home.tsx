import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { total, increaseByOne } = useAppContext();

  function Navegar() {
    navigate('about');
  }

  return (
    <div>
      <h1>Home</h1>
      <h3>{total}</h3>
      <button onClick={() => increaseByOne()}>Increase</button>
      <br />
      <a href="/about">Ir para About com Href</a>
      <br />
      <a onClick={() => Navegar()}>Ir para About com Navigate</a>
    </div>
  )
}

export default Home