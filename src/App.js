import { AlertProvider } from "./context/alertContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function App() {
  return (
    <AlertProvider>
      <main>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
        <Alert />
      </main>
    </AlertProvider>
  );
}

export default App;
