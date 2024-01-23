import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageHOC from './components/HOC/LikeImageHOC'
import LikePostHOC from './components/HOC/LikePostHOC'
import LikePostProps from './components/RenderProps/LikePostProps'
import LikeImageProps from './components/RenderProps/LikeImageProps'

function App() {
  return (
    <div>
      {/* <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div> */}

      {/* Part-1 HOC Logic */}
      {/* <h1>Blog uding HOC</h1>
      <div className='buttons'>
        <LikeImageHOC/>
        <LikePostHOC/>
      </div> */}

      {/*  */}
        <h1>Blog using Render Props</h1>
      <div className='buttons'>
        <LikeImageProps/>
        <LikePostProps/>
      </div>

    </div>
  );
}

export default App;
