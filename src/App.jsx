import Card from "./components/Card";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <Card />
      </DataProvider>
    </>
  );
}

export default App;
