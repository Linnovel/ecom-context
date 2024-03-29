import AllProductList from "./components/AllProductList";
import Card from "./components/Card";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <AllProductList />
        <Card />
      </DataProvider>
    </>
  );
}

export default App;
