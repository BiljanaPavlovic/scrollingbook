import './App.css';
import Bootcam from './bootcamp/bootcam';
import Footer from './footer/footer';
import Party from './party/party';
import Projects from './projectsForest/projects';
import ScreenOne from './screenOne/screenOne';
import StillStudy from './stillStudy/stillStudy';

function App() {
  return (
    <div className="App">
      <div className='intro'>


        <img
          src="/scrollingbook/images/avatarHeadline.png"
          alt="women" className='avatarIntro'
        />
        <h1>My Journey Into Tech</h1>
        <p className='intro-p'>So let's go...</p>
      </div>
      <ScreenOne />
      <Bootcam />
      <Party />
      <StillStudy />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
