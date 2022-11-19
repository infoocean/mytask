import React from 'react';
import Footer from '../Templates/Footer';
import Navbar from '../Templates/Header';
import SearchApp from './ReactSearchTable';

// Data to pass to our List elements
const employeeData = [
    {
      name: "Joan",
      title: "developer",
      salary: 100000,
      email: "sj550@gmail.com ",
      id: "1"
    },
    {
      name: "Enrique",
      title: "manager",
      salary: 200000,
      email: "sj550@gmail.com ",
      id: "2"
    },
    {
      name: "Shana",
      title: "developer",
      salary: 105000,
      email: "sj550@gmail.com ",
      id: "3"
    },
    {
      name: "Shana",
      title: "manager",
      salary: 105000,
      email: "sj550@gmail.com ",
      id: "4"
    }
  ];

function HomePage() {
    return ( <>
        <Navbar/>
        <SearchApp data={employeeData}/>
        <Footer/>
    </> );
}

export default HomePage;