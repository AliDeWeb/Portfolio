import Header from "./components/Header/Header";
import FreelancerIntroduction from "./components/FreelancerIntroduction/Introduction";
import Social from "./components/FreelancerSocial/Social";
import AboutFreelancer from "./components/AboutFreelancer/AboutFreelancer";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Projects from "./components/Projects/Projects";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Header />
      <main>
        <FreelancerIntroduction />
        <Social />
        <AboutFreelancer />
        <Skills />
        <Services />
        <ScrollTop />
        <Projects />
        <Comments />
      </main>
    </div>
  );
}

export default App;
