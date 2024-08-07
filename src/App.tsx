import "./App.css";
import { useGetProductsQuery } from "./redux/api/api";

function App() {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  console.log(products.data[0].name);
  return (
    <div>
      <h1>Camper Shop</h1>
      <button className="btn">Button</button>
      <button className="btn btn-active text-xl text-red-500">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-ghost">Ghost</button>
      <button className="btn btn-active btn-link">Link</button>
    </div>
  );
}

export default App;
