'use client'

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";
import Countdown from "@/components/countdown";
import React from "react";
import './globals.css';

const wowForeverBackground = '/images/WoW_Forever_Cinematic_Still_1.jpeg';
const wowForeverBackground2 = '/images/Wow_Forever_Cinematic_Still_5.jpeg';
const wowForeverCampfirePic = '/images/WoW_Forever_SCENIC_Announce_Camping_Players_063.jpg';

const eventDate = "2026-11-07T10:00:00";

export default function Home() {
    return (
        <CrossfadeContainer className="persp">
          <Head>
            <title>Leyawiins' Run</title>
          </Head>
          <div className="parallax-section" >
            <div className="overlay"></div>
            <Image className="background" fill="true" src={wowForeverBackground} alt="A World of Warcraft Dwarf, and his bear looking over the horizon of a grassy field and path. Led by a small blue wisp." />
            <div className="title-container unflex">
              <h1 className="title spaced-letters">TIME UNTIL LEYAWIINS' RUN</h1>
              <Countdown targetDate={eventDate} />
              <h2 className="title spaced-letters pt-10"><Link href="#how-to-participate">JOIN THE RUN</Link></h2>
            </div>
          </div>
          <div className="divider">
            <p>"Leyawiins' Run" is an in game memorial run I am orchestrating, which loosely follows the same path of the familiar dwarf we see in the opening cinematic trailer for World of Warcraft: Forever - Starting from Dun Morogh, and ending at Mount Hyjal.</p>
          </div>
          <div className="parallax-section justify-end pb-10">
            <Image className="background" fill="true" src={wowForeverBackground2} alt="."/>
            <div className="title-container">
              <h2 className="title spaced-letters">Who is this in memory of?</h2>
            </div>
          </div>
          <div className="divider">
            <p>"Leyawiins" is the name of my sister's main character. She was a level 80 Night Elf Druid - you might have seen her in game if you played on Emerald Dream around 2008. She introduced me to WoW, and I have a lot of fond memories playing with her, talking about the game, asking advice, doing low level raids, and so much more. We both mostly stopped playing after Cataclysm, but those early days of WoW still held a special place in our hearts.</p>
            <p>In 2023, she passed away from metastatic breast cancer. </p>
            <hr/>
            <p>This run is dedicated to her. I know she would have loved to experience seeing these long awaited additions to this world we gave so much of ourselves to.</p>
            <p>But, I know I can't be the only one who has had the misfortune of losing someone so deeply important, who I was instantly reminded of when I saw that first few seconds of the trailer.</p>
          </div>
          <div className="parallax-section">
            <Image className="background-last" fill="true" src={wowForeverCampfirePic} alt="Player characters standing around a campfire chatting."/>
            <div className="title-container">
              <h2 className="title spaced-letters">How to participate</h2>
            </div>
          </div>
          <div className="divider pt-10" id="how-to-participate">
            <h3>If you want to join the run</h3>
            <p className="display-as-contents">Meet me at Dun Morough on <span className="inline-green">November 7th around 10:00 AM CDT</span>. I'll update the site with my character name when it's been put together.</p> 
            <p>If you're subbed, you should already have access to WoW: Forever, and shouldn't need to pay any additional cost. You can bring a partially leveled character, but the run can be performed by a fresh character also if you're okay with death running.</p>
            <p>There's a written route I'm taking if you're interested in knowing which you can view here, but memorizing it ahead of time isn't required if you're planning to follow me for the duration of the run.</p>
            <hr/>
            <h3>If you want to watch</h3>
            <p>Shortly before the event, I will be updating the site to contain an embedded stream, and also a static link to a livestream of the run from my machine. If you get lost or want to join late, feel free to check the stream and meet us along the route, or just watch if you'd rather not join the walk.</p>
            <hr/>
            <h3>If you're interested in giving</h3>
            <p>This is not a fundraiser, and is not sponsored or backed by anyone or anything. This is simply a thing I wanted to do, that I thought might be fun to open up to others to participate in. But if you're compelled to give as a result, please consider donating to your cancer research charity of choice. I will not be accepting donations or gifts of any kind, so please do not offer.</p>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }