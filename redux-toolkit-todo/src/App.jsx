// import "./App.css";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
// import Todos from "./components/Todos";
// import AddTodos from "./components/AddTodos";
// function App() {
//   return (
//     <Provider store={store}>
//         <AddTodos />
//         <Todos />
//     </Provider>
//   );
// }

// export default App;



// ----------------------------------------------------------------------redux-persist

import "./App.css";



import { store } from "./app/store";
import { Provider } from "react-redux";

import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AddTodos />
        <Todos />
      </PersistGate>
    </Provider>
  );
}

export default App;
