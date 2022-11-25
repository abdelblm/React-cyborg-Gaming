import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './components/index';
import { Header, Footer } from './Sections/index';
import { Home, Profile } from './pages/index';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};
export default App;
