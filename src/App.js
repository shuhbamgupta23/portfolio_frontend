import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import { useSelector } from "react-redux";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Timeline from "./components/AdminPanel/Timeline";
import Project from "./components/AdminPanel/Project";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
       <Loader/>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home timeline={user.timeline} skills={user.skills} />}
            />
            <Route path="/about" element={<About about={user.about}/>} />
            <Route path="/projects" element={<Projects projects = {user.projects}/>} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
