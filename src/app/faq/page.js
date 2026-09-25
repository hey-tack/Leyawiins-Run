'use client'

import Image from "next/image";
import Link from "next/link";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";
import React from "react";
import './../globals.css';

const wowForeverBackground3 = '/images/cinematic3.jpeg';

export default function Faq() {
    return (
        <CrossfadeContainer className="persp">
          <div className="parallax-section" >
            <div className="overlay"></div>
            <Image className="background" fill="true" src={wowForeverBackground3} alt="An still iamge of the World of Warcraft: Forever cinematic trailer. It depicts a skyborne standing atop a massive golden chain held up by a tower in the clouds, while a blue sprite flies off from within arms reach." />
            <div className="title-container">
              <h1 className="title spaced-letters">FAQ</h1>
            </div>
          </div>
          <div className="divider pt-10 faq-list">
            <h3>What is this?</h3>
            <p>This is a World of Warcraft: Forever, player hosted in-game community event. It's a memorial 'death run' I'm leading for my sister, who passed away in 2023.</p>
            <h3>What's a 'Death Run'?</h3>
            <p>It's when you take an under-leveled character into high level, and/or endgame zones and areas.</p>
            <h3>Where are you running to?</h3>
            <p>Mount hyjal.</p>
            <h3>Where does it start?</h3>
            <p className="display-as-contents unflex">The run rallies at Coldridge Valley, just outside of Anvilmar. In other words, just the Dwarf / Gnome starting area. It can be found <Link className="link-styling" href="https://mapgenie.io/world-of-warcraft/maps/eastern-kingdoms?locationIds=657728" target="_blank">here on mapgenie</Link>.</p>
            <h3>How will we get there?</h3>
            <p className="display-as-contents unflex">We will run <Link className="link-styling" href="/route" target="_blank">the planned route</Link> together, which I will lead. Or you can read the route and follow it yourself if you want.</p>
            <h3>When is it?</h3>
            <p className="display-as-contents unflex"><span className="inline-green">November 7th around 10:00 AM CDT.</span> This is intentionally during the first week of launch, so people with friend passes can join too if they want.</p>
            <h3>How long it is?</h3>
            <p>I anticipate the run to take about 4 hours or so. My plan is to take a 5-10 minute break every hour. But please take breaks if you need to beyond that - it's a marathon, not a race.</p>
            <h3>PvP / Hardcore?</h3>
            <p>No. This will take place on PVE, so more people can casually participate - and hopefully actually make it to Hyjal.</p>
            <h3>Does this cost anything?</h3>
            <p>If you're subbed, you should already have access to WoW: Forever, and shouldn't need to pay any additional cost. Bring a friend if you've got a spare friend pass.</p>
            <h3>Are you streaming this?</h3>
            <p className="display-as-contents unflex">I'm going to try. If I do, I'll be streaming the event at <Link className="link-styling" href="https://www.youtube.com/@Leyawiins_Run" target="_blank">this youtube channel</Link>. Just gameplay - no commentary or non-game audio. I will also have the stream embedded on this site too if I can figure out how.</p>
            <h3>Why am I doing this?</h3>
            <p>I want to. Sounded fun, and I miss my sister.</p>
            <h3>Will this be a recurring event?</h3>
            <p>Almost certainly not. But never say never I guess.</p>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }