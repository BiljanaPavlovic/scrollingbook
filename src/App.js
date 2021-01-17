import './App.css';
import Bootcam from './bootcamp/bootcam';
import Party from './party/party';
import Projects from './projectsForest/projects';
import ScreenOne from './screenOne/screenOne';
import StillStudy from './stillStudy/stillStudy';

function App() {
  return (
    <div className="App">
      <h1>My Journey Into Tech</h1>
      <ScreenOne />
      <Bootcam />
      <Party />
      <StillStudy />
      <Projects />
    </div>
  );
}

export default App;
