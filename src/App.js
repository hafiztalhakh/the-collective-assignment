import AppRoutes from "src/routes";
import Header from "src/components/header";
function App() {
  return (
    <div>
      <Header heading={"Search Gists"} />
      <AppRoutes />
    </div>
  );
}

export default App;
