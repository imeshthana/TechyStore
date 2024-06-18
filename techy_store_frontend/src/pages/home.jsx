import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Landing from '../components/landing';
import Products from '../components/products';
import ImagePlacement from '../components/imagePlacement';
import ContactUs from '../components/contactUs';
import Reviews from '../components/reviews';

const Home = () => {
  return (
    <section >
      <ImagePlacement />
      <div>
        <Header />
        <Landing />
        <Products />
        <Reviews />
        <ContactUs />
      </div>
      <Footer />
    </section>

  );
}

export default Home;
