import React from "react";
import CardNav from './components/CardNav'
import logo from './logo.svg';
import TextType from "./components/Title";
import Particles from "./components/LandingPageBackground";
import ButtonUsage from "./components/Button";
function Home() {

    const items = [

    {

      label: "About",

      bgColor: "#0D0716",

      textColor: "#fff",

      links: [

        { label: "Company", ariaLabel: "About Company" },

        { label: "Careers", ariaLabel: "About Careers" }

      ]

    },

    {

      label: "Projects", 

      bgColor: "#170D27",

      textColor: "#fff",

      links: [

        { label: "Featured", ariaLabel: "Featured Projects" },

        { label: "Case Studies", ariaLabel: "Project Case Studies" }

      ]

    },

    {

      label: "Contact",

      bgColor: "#271E37", 

      textColor: "#fff",

      links: [

        { label: "Email", ariaLabel: "Email us" },

        { label: "Twitter", ariaLabel: "Twitter" },

        { label: "LinkedIn", ariaLabel: "LinkedIn" }

      ]

    }

  ];


  return (
    <div> 
      <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: -1, }}>
        <Particles
          particleColors={['#000000', '#000000']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={30}
        />
      </div> 
            
        <CardNav
      logo={logo}

      logoAlt="Company Logo"

      items={items}

      baseColor="#fff"

      menuColor="#000"

      buttonBgColor="#111"

      buttonTextColor="#fff"

      ease="power3.out"

    />
   
    <TextType 
    style={{
        display: "flex",
        justifyContent: "center", /* Centers horizontally */
        alignItems: "center",
        fontSize: "4rem",
        fontWeight: "600",
        width: "100%",
        textAlign: "center",
        height: "80vh",
        position: "relative",
    
      }}
    className="title"
      text={["Welcome to Data Structures & Algorithms 101", "You will find tutorials, resources and even a coding environment for you to implement your solutions!", "Happy coding!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      />
      <ButtonUsage />
</div>
      

  );

}

export default Home;
