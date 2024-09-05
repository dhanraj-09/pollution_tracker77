import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Report from "./components/Report.jsx";
import './index.css'
import Seekinfo from "./components/Seekinfo.jsx";
import Rough from "./components/Rough.jsx";
import Profile from "./components/Profile.jsx";
import Post from "./components/Post.jsx";

const root1=createRoot(document.getElementById('root1'));
root1.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
const root2=createRoot(document.getElementById('root2'));
root2.render(
  <StrictMode>
    <Report/>
  </StrictMode>
)
const root3=createRoot(document.getElementById('root3'));
root3.render(
  <StrictMode>
    <Seekinfo/>
  </StrictMode>
)
const root4=createRoot(document.getElementById('root4'));
root4.render(
  <div>
    <StrictMode>
      <Rough/>
    </StrictMode>
  </div>
)
const root5=createRoot(document.getElementById('root5'));
root5.render(
  <div>
    <StrictMode>
      <Rough/>
    </StrictMode>
  </div>
)
const root6=createRoot(document.getElementById('root6'));
root6.render(
  <div>
    <StrictMode>
      <Post/>
    </StrictMode>
  </div>
)

