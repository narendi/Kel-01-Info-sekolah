import { ThemeProvider } from 'next-themes';
import Router from "./route/Router";

function App() {
  console.log(process.env.GENERATE_SOURCEMAP);
  return (
    <>
      <ThemeProvider attribute='class' enableSystem={false}>
        {/* router  */}
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
