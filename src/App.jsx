import Carousel from "./Carousel";

const App = () => {
  const person = {
    name: "maria",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha",
  };

  return (
    <main>
      <h2>Slider Starter</h2>
      <Carousel person={person} />
    </main>
  );
};

export default App;
