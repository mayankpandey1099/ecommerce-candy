
import Card from "./Card";

const Home = () => {
  return (
    <div className="justify-between text-center">
      <h1 className="text-4xl font-bold bg-gray-100 border shadow-lg w-full">
        The Generics
      </h1>
      <h2 className="text-3xl font-semibold mb-4">Music</h2>
      <div className="flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Home;
