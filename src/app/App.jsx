import Header from "../components/Header";
import { HeaderMobile } from "../components/HeaderMobile";
import Footer from "../components/Footer";
import RoutesApp from "../routes";
import { MenuContextProvider } from "../context/menuContext";

function App() {
  const width = window.innerWidth;
  return (
    <MenuContextProvider>
      {width <= 500 ? <HeaderMobile /> : <Header />}
      <RoutesApp />
      <Footer />
    </MenuContextProvider>
  );
}

export default App;
