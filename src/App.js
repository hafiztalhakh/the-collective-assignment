import { Provider } from "react-redux";
import store from './store/store';
import AppRoutes from "src/routes";
import Header from "src/components/header";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header heading={"Search Gists"} />
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
