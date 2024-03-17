import Nav from './components/Nav'
import BannerMain from './components/BannerMain'
import SectionMain from './components/SectionMain';
import { useState } from 'react';
import BigMovie from './components/_path/BigMovie';
import ElephantMovie from './components/_path/Movie';
import MoreInfoBig from './components/_path/MoreInfoBig'
import MoreInfoEl from './components/_path/MoreInfoEl'

function AppComplete() {
  return (
    <>
      <Nav />
      <BannerMain />
      <SectionMain />
    </>
  );
}

function MoreInfoBig1() {
  return (
    <>
      <Nav />
      <MoreInfoBig />
    </>
  );
}

function MoreInfoEl1() {
  return (
    <>
      <Nav />
      <MoreInfoEl />
    </>
  );
}


function Movie1(){
  return(
    <BigMovie />
  )
}

function Movie2(){
  return(
    <ElephantMovie />
  )
}

function App(){
  const [setCurrentPath, currentPath] = useState(window.location.pathname);
  return(
    <>
      {setCurrentPath == '/' && <AppComplete />}
      {setCurrentPath == '/movie-dream' && <Movie2 />}
      {setCurrentPath == '/movie-big' && <Movie1 />}
      {setCurrentPath == '/more-info-big' && <MoreInfoBig1 />}
      {setCurrentPath == '/more-info-el' && <MoreInfoEl1 />}
    </>
  )
}

export default App;
