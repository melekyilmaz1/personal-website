import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#171026] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-4 space-y-6">
        <Header />
        <main className="space-y-8">
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}