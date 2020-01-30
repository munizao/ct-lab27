import React from 'react';
import Madlib from './madlib/containers/Madlib';
import Header from './Header';
import Footer from './Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Madlib />
      <Footer />
    </>
  );
}
