import AppRouter from "./AppRouter";
import Layout from "./layouts/Layout";
import { DataProvider } from "./context/DataContext";

import "./index.css";

function App() {
  return (
    <DataProvider>
      <Layout>
        <AppRouter />
      </Layout>
    </DataProvider>
  );
}

export default App;
