import React from 'react';
import { Container } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';


const Hero = ({ onSearch }) => {
  return (
    <section className="hero-section">
      <Container>
        <h1 className="hero-title">
          Precision in <span>Code</span> & <span>Content</span>
        </h1>
        <div className="search-container">
          <Search className="search-icon" />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search Articles..." 
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
