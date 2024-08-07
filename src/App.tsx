import "./App.css";

function App() {
  return (
    <>
      <h1>Camper Shop</h1>
      <button className="btn">Button</button>
      <button className="btn btn-active text-xl text-red-500">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      <button className="btn btn-active btn-link">Link</button>
    </>
  );
}

export default App;
