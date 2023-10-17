import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';

const Card = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50%;
padding: 25px;
margin: 30px;
color: black;
background-color: grey;
border: 1px solid black;
`;



const Title = styled.h1`
color: white;
margin-top: 10px;
`;

function App() {


  return ( 
    <Card>
   <section>
    <img src="https://d1rgjmn2wmqeif.cloudfront.net/r/g/29525.jpg"/>
<Title><h1>Gesaffelstein</h1></Title>
<h2>Conspiracy Pt.2</h2>
<p>Gesaffelstein's 'Variations' EP set an all-time record for feedback at Turbo. For a new artist to attract that kind of attention from such a broad cross-section of DJs is extremely special and a clear sign that the he's tapped in to something very, very big. To the younger generation of clubbers and DJs for whom the funtastic era of 2001-2003 revivalism was a missed experience, Gesaffelstein represents a double-breasted jacket of nostalgia for everything from the power of Industrial and 80s New Wave to the Gigolo-glam of early Kittin & the Hacker, Steril, Vitalic, Fixmer, and yes, Tiga.</p>git add <div className=""></div>
</section>
</Card>
  )
} 

export default App
