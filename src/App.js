import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CreateForm from "./components/forms/createForm";
import EditForm from "./components/forms/editForm";
import SubmitForm from "./components/forms/submitForm";
import RoomDetail from "./components/Rooms/RoomDetail";

import Home from "./components/home/home";

function App() {
  return (
    <>
      <Header />
      <Home />
      {/*<Router>
        <Routes>
           <Route path="/" element={<Rooms />}></Route>
           <Route path="/create" element={<CreateForm />}></Route>
           <Route path="/:_id" element={<RoomDetail />}></Route>
           <Route path="/edit/:_id" element={<EditForm />}></Route>
        </Routes>
      </Router> */}
      <Footer />
    </>
  );
}

export default App;
