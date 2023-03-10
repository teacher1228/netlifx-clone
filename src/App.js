
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Products from './components/Products';
function App() {
  const [change] = useState('/images/home.png')
  return (
    <div className="app">
      <Container bg={change}>
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
      </Container>
      <Products />
      <Footer />
    </div>
  );
}

export default App;

const Container = styled.div`
background-image:url("${props=>props.bg}");
width:100%;
height:100vh;
background-size:cover;
background-position:center

`
