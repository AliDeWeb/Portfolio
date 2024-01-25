import Header from "./components/Header/Header";
import FreelancerIntroduction from "./components/FreelancerIntroduction/Introduction";
import Social from "./components/FreelancerSocial/Social";
import AboutFreelancer from "./components/AboutFreelancer/AboutFreelancer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <FreelancerIntroduction></FreelancerIntroduction>
        <Social></Social>
        <AboutFreelancer />
        <Skills></Skills>
      </main>
    </div>
  );
}

export default App;
