import React, { Fragment } from "react";

import {
  Hero,
  About,
  Choose,
  Contact,
  Courses,
  Testimonials,
  Header,
} from "../Containers/index";

import { Spacer, Footer, Reasons } from "../Components/index";

const Home = () => {
  return (
    <Fragment>
      <section className="hero-gradient">
        <Header />
        <Hero />
      </section>
      <About />
      <Spacer />
      <Courses />
      <Choose />
      <Reasons />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
