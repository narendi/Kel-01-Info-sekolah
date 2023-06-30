import Router from "./route/Router";

function App() {
  console.log(process.env.GENERATE_SOURCEMAP);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
