import Rating from "./components/Rating";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#131518] text-white">
      <Rating
        title="How did we do?"
        content="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
      />
    </div>
  );
};

export default App;
