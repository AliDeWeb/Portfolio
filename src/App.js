import Header from "./components/Header/Header";
import FreelancerIntroduction from "./components/FreelancerIntroduction/Introduction";
import Social from "./components/FreelancerSocial/Social";
import AboutFreelancer from "./components/AboutFreelancer/AboutFreelancer";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <FreelancerIntroduction></FreelancerIntroduction>
        <Social></Social>
        <AboutFreelancer />
        <Skills></Skills>
        <Services></Services>
      </main>
    </div>
  );
}

export default App;
