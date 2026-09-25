'use client'

import Image from "next/image";
import CrossfadeContainer from "@/helpers/CrossfadeContainer";
import React from "react";
import './../globals.css';

const wowForeverBackground4 = '/images/waterzone.jpg';
const route_1 = '/images/Route1.png';
const route_2 = '/images/Route2.png';
const route_3 = '/images/Route3.png';
const route_4 = '/images/Route4.png';
const route_5 = '/images/Route5.png';
const route_6 = '/images/Route6.png';
const route_7 = '/images/Route7.png';
const route_8 = '/images/Route8.png';
const route_9 = '/images/Route9.png';
const route_10 = '/images/Route10.png';
const route_11 = '/images/Route11.png';
const route_12 = '/images/Route12.png';
const route_13 = '/images/Route13.png';

export default function Route() {
    return (
        <CrossfadeContainer className="persp">
          <div className="parallax-section">
            <div className="overlay"></div>
            <Image className="background" fill="true" src={wowForeverBackground4} alt="A view of a dock, in the game of World of Warcraft: Forever" />
            <div className="title-container unflex">
              <h1 className="title spaced-letters">ROUTE</h1>
              <br className="pt-10"/>
            </div>
          </div>
          <div className="divider pt-10 faq-list">
            <h3>1. Coldridge Valley Rallying Point, through most of Dun Morough.</h3>
            <Image className="route-image" src={route_1} />
            <hr/>
            <h3>2. Dun Morough to Loch Modan, and through the wetlands to Menithil Harbor. We're taking the ship on the northernmost dock to Southshore.</h3>
            <Image className="route-image" src={route_2} />
            <hr/>
            <h3>3. Ride the boat to its first stop, Southshore. Disembark.</h3>
            <Image className="route-image" src={route_3} />
            <hr/>
            <h3>4. Walk from southshore to Dalaran.</h3>
            <Image className="route-image" src={route_4} />
            <hr/>
            <h3>5. Return to the Southshore docks, and await the next ship to Darkshore.</h3>
            <Image className="route-image" src={route_5} />
            <hr/>
            <h3>6. Ride the ship to Darkshore, and disembark.</h3>
            <Image className="route-image" src={route_6} />
            <hr/>
            <h3>7. Darkshore to Ashenvale</h3>
            <Image className="route-image" src={route_7} />
            <hr/>
            <h3>8. Ashenvale to Felwood</h3>
            <Image className="route-image" src={route_8} />
            <hr/>
            <h3>9. Through Felwood, north to the Furbolg cave called "Timbermaw hold".</h3>
            <p>NOTE: This will be the most difficult area to progress through given the high number of enemies which will one shot us, and no way to avoid them. I've marked the graveyard location and where to run back in blue - because this will be the most tedious part of the run, in terms of corpse running. Expect to die a lot.</p>
            <Image className="route-image" src={route_9} />
            <hr/>
            <h3>10. Walk through winterspring, turning south to Darkwhisper Gorge.</h3>
            <Image className="route-image" src={route_10} />
            <hr/>
            <h3>11. Carefully navigate Darkwhisper Gorge</h3>
            <p>NOTE: Do your best to avoid enemies here, because the corpse run back here is BRUTALLY long.</p>
            <Image className="route-image" src={route_11} />
            <hr/>
            <h3>12. Begin climbing Mount Hyjal, following the path up the mountain.</h3>
            <p>NOTE: You'll notice another blue graveyard and route. You will probably die here too, but it's much easier to quickly bypass these scourge due to the open area for better res positioning.</p>
            <Image className="route-image" src={route_12} />
            <hr/>
            <h3>13. After the scourge, follow the road up until the demon infested village, finally entering The Well of Eternity, thus officially ending the run</h3>
            <p>NOTE: Do your best to circle around to better avoid enemies in the village. I hugged the southern wall of the area and had pretty good luck making it through.</p>
            <Image className="route-image" src={route_13} />
            <hr/>
            <h3>And that's it!</h3>
          </div>
          <div className="mini-divider"></div>
        </CrossfadeContainer>
    );
  }