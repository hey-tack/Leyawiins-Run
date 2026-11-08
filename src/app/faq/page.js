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
            <p>This was a World of Warcraft: Forever, player hosted in-game community event. It's a memorial 'death run' I'm leading for my sister, who passed away in 2023.</p>
            <h3>What's a 'Death Run'?</h3>
            <p>It's when you take an under-leveled character into high level, and/or endgame zones and areas.</p>
            <h3>Where are you running to?</h3>
            <p>Mount hyjal.</p>
            <h3>Can I join?</h3>
            <p>The run is over now, so no sadly. While it was open to public participation, between the scheduling, time constraints, and difficulty, almost nobody was able to realistically participate with me. This didn't really surprise me.</p>
            <h3>Where did it start?</h3>
            <p className="display-as-contents unflex">The run started at Coldridge Valley, just outside of Anvilmar. In other words, just the Dwarf / Gnome starting area. It can be found <Link className="link-styling" href="https://mapgenie.io/world-of-warcraft/maps/eastern-kingdoms?locationIds=657728" target="_blank">here on mapgenie</Link>.</p>
            <h3>How do we know it's you?</h3>
            <p>If you were trying to find me when the run started, my character name was "Leyawiins Brother"</p>
            <h3>How did you get there?</h3>
            <p className="display-as-contents unflex">I ran on foot. Mostly following the established route.</p>
            <h3>When was it?</h3>
            <p className="display-as-contents unflex"><span className="inline-green">November 7th around 10:00 AM CST, 2026.</span> This was intentionally during the first week of launch, so people with friend passes could have joined.</p>
            <h3>How long was is?</h3>
            <p>I anticipated the run to take about 4 hours or so with breaks. It ended up taking roughly 7.5 hours</p>
            <h3>PvP / Hardcore?</h3>
            <p>This took place on the 'normal' difficulty settings, for obvious reasons.</p>
            <h3>Did this cost anything?</h3>
            <p>If you were subbed, you should have already have access to WoW: Forever, and shouldn't need to pay any additional cost. And friend passes were an option.</p>
            <h3>Did you stream this?</h3>
            <p className="display-as-contents unflex">I did. The stream can be reviewed at <Link className="link-styling" href="https://www.youtube.com/@Leyawiins_Run" target="_blank">this youtube channel</Link>. Not particularly thrilling to watch. But I do sometimes break the silence to talk with chat.</p>
            <h3>Why did I do this?</h3>
            <p>I wanted to. Sounded fun, and I miss my sister.</p>
            <h3>Will this be a recurring event?</h3>
            <p>Almost certainly not. But never say never I guess.</p>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }