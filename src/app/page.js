'use client'

import Link from "next/link";
import Head from "next/head";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";
import React from "react";
import './globals.css';

import Link from "next/link";
import Image from "next/image";
import CrossfadeContainer from '@/helpers/CrossfadeContainer';

// const illuminiBgImage = '/images/illumini.jpg';
// const tackBgImage = '/images/tack.jpg';
// const logoSVG = '/images/';

export default function Home() {
    return (
        <CrossfadeContainer className="persp">
          <Head>
            <title>Leyawiins' Run</title>
          </Head>
          <div className="parallax-section" >
            <div className="overlay"></div>
            {/* <Image className="background" fill="true" src={logoSVG} alt="The Haptic Studios logo" /> */}
            <div className="title-container">
              <h2 className="title spaced-letters">What is this event?</h2>
            </div>
          </div>
          <div className="divider">
            <p>"Leyawiins' Run" is an in game memorial run, which loosely follows the same path of the familiar dwarf we see in the opening cinematic trailer for World of Warcraft: Forever - Starting from Dun Morogh, and ending at Mount Hyjal.</p>
          </div>
          <div className="parallax-section justify-end pb-10">
              {/* <Image className="background" fill="true" src={illuminiBgImage} alt="."/> */}
              <h2 className="title spaced-letters text-border">Who is this in memory of?</h2>
          </div>
          <div className="divider">
            <p>"Leyawiins" was the name of the Main character account of my sister, Jen. She was a level 80 Night Elf Druid - you might have seen her in game if you played on Emerald Dream around 2008. She introduced me to WoW, and I have a lot of fond memories playing with her, talking about the game, asking advice, doing low level raids, and so much more. We both mostly stopped playing after Cataclysm, but those early days of WoW still held a special place in our hearts.</p>
          </div>
          <div className="parallax-section">
              {/* <Image className="background-left" fill="true" src={tackBgImage} alt=""/> */}
              <h2 className="title spaced-letters">HEY_TACK</h2>
              <h2 className="title spaced-letters">PROGRAMMING | ART | DESIGN</h2>
          </div>
          <div className="divider">
            <p>Lead Developer, Game Designer, and Artist for Haptic Studios.</p> 
            <i>&quot;The first game I ever played was Diddy Kong Racing on the N64 - and I distinctly remember asking myself `How do people make these?`. <br/> Here I am nearly 20 years later, and there are times where I feel no closer to answering that question.&quot;</i>
            <br/>
            <Link className='dark-link spaced-letters link-hover-effect' href="/">RETURN TO MAIN PAGE</Link>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }