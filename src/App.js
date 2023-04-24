import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Offers from "./components/offers/offers";
import Contact from "./components/contact/Contact";
import CreateForm from "./components/forms/createForm";
import EditForm from "./components/forms/editForm";
import SubmitForm from "./components/forms/submitForm";
import RoomDetail from "./components/Rooms/RoomDetail";

import Home from "./components/home/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="/rooms"
            element={
              <Layout>
                <Rooms />
              </Layout>
            }
          ></Route>
          <Route
            path="/offers"
            element={
              <Layout>
                <Offers />
              </Layout>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          ></Route>
          <Route path="/create" element={<CreateForm />}></Route>
          <Route path="/:_id" element={<RoomDetail />}></Route>
          <Route path="/edit/:_id" element={<EditForm />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
