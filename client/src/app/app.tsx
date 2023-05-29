
import { Home } from "src/pages/Home";
import { Layout } from "../components/Layout"
import { Connection } from "src/pages/Connection";
import { Provider } from "react-redux";
import { store } from "src/store";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ItemPage } from "src/pages/ItemPage";
import { UserPage } from "src/pages/UserPage";



export function App() {

  return (
    <Provider store={store}>
      <Layout>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path={"/item/:id"} element={<ItemPage />}/>
              <Route path={"/user/:id"} element={<UserPage />}/>
              <Route path="/Connection" element={<Connection/>}/>
        </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

