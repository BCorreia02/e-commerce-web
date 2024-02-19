import React from 'react';
import '../styles/home.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="container">
      <Header></Header>
      {/* Scroll View */}
      <div className="scrollView">
        {/* Content */}
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra urna eget magna varius, vel venenatis libero faucibus. Donec lacinia ex non lacus congue, vel hendrerit libero viverra. Nulla facilisi. Morbi a mi eget velit consectetur iaculis in a justo. Fusce feugiat, orci at aliquet luctus, lorem sem cursus est, non fermentum est turpis quis quam. Nam vel metus vitae sem malesuada mattis. Cras condimentum id quam sit amet vehicula. Sed id eleifend purus, sed volutpat nulla. Duis porttitor sit amet nulla sit amet vehicula.
        </p>
      </div>
    </div>
  );
};

export default Home;