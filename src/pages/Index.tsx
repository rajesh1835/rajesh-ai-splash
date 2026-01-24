import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Tarigonda Rajesh | AI/ML Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Tarigonda Rajesh, an AI/ML enthusiast and developer specializing in building innovative solutions." />
        <meta name="keywords" content="AI, Machine Learning, Developer, Portfolio, React, Data Science" />
        <meta property="og:title" content="Tarigonda Rajesh | AI/ML Engineer Portfolio" />
        <meta property="og:description" content="Explore the portfolio and projects of Tarigonda Rajesh." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GithubActivity />
      <Contact />
    </div>
  );
};

export default Index;
