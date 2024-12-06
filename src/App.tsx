import styles from "./App.module.scss";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className={styles.app_main}>
      <Navbar />
      <div className={styles.app_content}>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
