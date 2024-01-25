import Header from "./components/Header/Header";
import FreelancerIntroduction from "./components/FreelancerIntroduction/Introduction";
import Social from "./components/FreelancerSocial/Social";
import AboutFreelancer from "./components/AboutFreelancer/AboutFreelancer";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <FreelancerIntroduction></FreelancerIntroduction>
        <Social></Social>
        <AboutFreelancer />
      </main>
    </div>
  );
}

export default App;
