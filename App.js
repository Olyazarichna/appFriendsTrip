import { Provider } from "react-redux";
import { store } from "./redux/store";

import MainPage from './MainPage';

export default function App() {

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>

  );
}
