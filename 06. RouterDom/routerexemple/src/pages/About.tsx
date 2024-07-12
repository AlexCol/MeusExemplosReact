import { useAppContext } from "../context/AppContext";

const About = () => {
  const { total, increaseByOne } = useAppContext();

  return (
    <div>
      <h1>About</h1>
      <h3>{total}</h3>
      <button onClick={() => increaseByOne()}>Increase</button>
    </div>
  )
}

export default About