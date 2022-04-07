import './App.css';
import Feature from './components/Feature/Feature';
import Hero from './components/Hero/Hero';
import Baby from './components/Baby/Baby';
import About from './components/About/About';
import Team from './components/Team/Team';
import Family from './components/Family/Family';
import Eager from './components/Eager/Eager';
import Contact from './components/Contact/Contact';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
function App() {
  const {ref, inView} = useInView({
    threshold: 0
  }
  )
  const {FeaturesRef, useFeatureInview} = useInView({
    threshold: 0
  }
  )
  const {AboutUsRef, useAboutUsInview} = useInView({
    threshold: 0
  }
  )
  const {TeamRef, useTeamInview} = useInView({
    threshold: 0
  }
  )
  const {ContactRef, useContactInview} = useInView({
    threshold: 0
  }
  )
  useEffect(() => {
    console.log(inView)
  })
  return (
    <div className="">
      <Hero pass = {ref} home = {inView} feature = {useFeatureInview} about = {useAboutUsInview} team = {useTeamInview} contact = {useContactInview}/>
      <Feature pass = {FeaturesRef}/>
      <Baby />
      <About pass = {AboutUsRef}/>
      <Family />
      <Team pass = {TeamRef}/>
      <Eager />
      <Contact pass = {ContactRef}/>
      </div>  
  );
}

export default App;
