"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import cat from "../../public/cat.gif";

export default function Home() {
  return (
    <main>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: "url('/moon.png')",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: "url('/land.png')",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.05}>
          <h2
            className="text-white text-8xl text-center"
            style={{
              textShadow:
                "-1px 0 black, 0 3px black, 3px 0 black, 0 -3px black",
            }}
          >
            Welcome to my website
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <h2
            className="text-white text-8xl text-center"
            style={{
              textShadow:
                "-1px 0 black, 0 3px black, 3px 0 black, 0 -3px black",
            }}
          >
            Web development is fun!
          </h2>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.9, end: 2.4 }}>
          <Image src={cat} alt="Flying cat" className="mx-auto" />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
