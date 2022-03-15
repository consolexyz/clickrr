
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import WorkExperience from './components/work-experience/WorkExperience';
import Recommendation from './components/recommendations/Recommendation';
import Contact from './components/contact/Contact';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WorkExperience />
      <Recommendation />
      <Contact />
      </div>
  )
}

export default App;
