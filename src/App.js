import Header from "./components/Header/Header";
import FreelancerIntroduction from "./components/FreelancerIntroduction/Introduction";
import Social from "./components/FreelancerSocial/Social";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <FreelancerIntroduction></FreelancerIntroduction>
        <Social></Social>
      </main>
    </div>
  );
}

export default App;
