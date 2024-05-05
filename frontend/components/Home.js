
import Card from "./Card";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6">The Generics</h1>
          <h2 className="text-2xl font-semibold mb-4">Music</h2>
          <div className="flex flex-wrap justify-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
