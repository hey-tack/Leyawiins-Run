'use client'

import Image from "next/image";
import Link from "next/link";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";
import Countdown from "@/components/countdown";
import React from "react";
import './globals.css';

const wowForeverBackground = '/images/cinematic1.jpeg';
const wowForeverBackground2 = '/images/cinematic2.jpeg';
const wowForeverCampfirePic = '/images/camping.jpg';

const eventDate = "2026-11-07T10:00:00";

export default function Home() {
    return (
        <CrossfadeContainer className="persp">
          <div className="parallax-section" >
            <div className="overlay"></div>
            <Image className="background" fill="true" src={wowForeverBackground} alt="A World of Warcraft Dwarf, and his bear looking over the horizon of a grassy field and path. Led by a small blue wisp." />
            <div className="title-container unflex">
              <h1 className="title spaced-letters">LEYAWIINS' RUN</h1>
              <h2 className="title spaced-letters">IS FINISHED</h2>
              <p className="title spaced-letters">Thank you for watching</p>
              <h2 className="title spaced-letters pt-10"><Link href="#how-to-participate">RULES</Link> | <Link href="/faq">FAQ</Link> | <Link href="/route">ROUTE</Link></h2>
              <br className="pt-10"/>
            </div>
          </div>
          <div className="divider">
            <iframe
              src="https://www.youtube.com/embed/AFcS3RJFKTk?si=IHtfa5LIIgTjQmaW"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: '100%',
                maxWidth: '560px',
                aspectRatio: '16 / 9',
                margin: '24px auto',
                display: 'block',
                borderRadius: '12px',
                border: 'none',
              }}
            />
            <p className="display-as-contents">"Leyawiins' Run" was an in game memorial event I orchestrated. It's a <i>Death Run</i> which loosely follows the same path of the familiar dwarf we see in the opening cinematic trailer for World of Warcraft: Forever - Starting from Dun Morogh, and ending at Mount Hyjal.</p>
            <p>What's a "Death Run"? it's essentially just running through high level content as a low level character. In some cases, corpse-running repeatedly to gradually inch through tough, or mob-dense areas.</p>
          </div>
          <div className="parallax-section justify-end pb-10">
            <Image className="background" fill="true" src={wowForeverBackground2} alt="."/>
            <div className="title-container">
              <h2 className="title spaced-letters">Who is this in memory of?</h2>
            </div>
          </div>
          <div className="divider">
            <p>"Leyawiins" is the name of my sister's main character. She's a Night Elf Druid - you might have seen her in game if you played on Emerald Dream around 2008. She introduced me to WoW, and I have a lot of fond memories playing with her, talking about the game, asking advice, doing low level raids, and so much more. We mostly stopped playing after Cataclysm, but those early days still held a special place in our hearts.</p>
            <p>In 2023, she passed away from metastatic breast cancer. </p>
            <hr/>
            <p>This run was dedicated to her. I know she would have loved to experience seeing these long awaited additions to this world we gave so much of ourselves to.</p>
            <p>But, I know I can't be the only one who has had the misfortune of losing someone so deeply important. Someone who they were instantly reminded of when seeing that iconic first few seconds of the trailer.</p>
          </div>
          <div className="parallax-section">
            <Image className="background-last" fill="true" src={wowForeverCampfirePic} alt="Player characters standing around a campfire chatting."/>
            <div className="title-container">
              <h2 className="title spaced-letters">How to participate</h2>
            </div>
          </div>
          <div className="divider pt-10" id="how-to-participate">
            <h3 className="unset-width">Rules of the Run</h3>
            <p className="display-as-contents">Starting from Coldridge Valley, Dun Morough on <span className="inline-green">November 7th around 10:00 AM CST</span>. I would run my character <span className="inline-green">Leyawiins Brother</span> ON FOOT to mount Hyjal without killing any mobs or completing any quests.</p> 
            <p>There is no time limit. Breaks were okay. The run ended up taking 7.5 hours in total. Nearly double my original estimate.</p>
            <p className="display-as-contents unflex">There is a <Link className="link-styling" href="/route">route</Link>. This route is just a suggestion. I even skipped part of the route to try and make up time - specifically the Dalaran crater / ruins section.</p>
            <p>Because of how likely you are to die at every step, I would suggest being on the 'normal' ruleset so you can corpserun. Hence the name 'death run'</p>
            <p>There isn't technically a requirement that you be level 1. But it definitely makes the run more challenging.</p>
            <hr/>
            <h3 className="unset-width">If you want to watch</h3>
            <p className="display-as-contents unflex">This event was livestreamed, and can be found on <Link className="link-styling" href="https://www.youtube.com/@Leyawiins_Run" target="_blank">the Leyawiins' Run youtube channel</Link>.</p>
            <hr/>
            <h3 className="unset-width">Why did I doing this?</h3>
            <p>This was not a fundraiser, and was not sponsored or backed by anyone or anything. This is just a thing I wanted to do - a thing I thought might be fun to open up for others to participate in. If you're compelled to do something about those suffering from cancer, consider donating to your cancer research charity of choice. I will not be accepting donations or gifts of any kind, so please do not offer.</p>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }
