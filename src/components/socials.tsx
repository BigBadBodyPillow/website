'use client';
import React, { useEffect } from 'react';
import '@/app/styles/socials.css';

const Socials = () => {
  useEffect(() => {
    const bigButton = document.getElementById('big-cat');
    const smallButton = document.getElementById('small-cat');
    //declare event
    const makeCatBig = (event: MouseEvent) => {
      //if the big cat is hidden, then when clicked
      if (bigButton?.classList.contains('hidden')) {
        //make the big cat be seen
        //and hide the small cat
        console.log('big cat can be seen');
        smallButton?.classList.add('hidden');
        bigButton.classList.remove('hidden');
      } else {
        //otherwhise that means that big cat is not hidden
        //so hide the big cat
        //and show the small cat
        console.log('small cat can be seen');
        smallButton?.classList.remove('hidden');
        bigButton?.classList.add('hidden');
      }
    };
    //if small button exists
    if (smallButton) {
      //add an event listener
      smallButton.addEventListener('click', makeCatBig);
    }
    if (bigButton) {
      bigButton.addEventListener('click', makeCatBig);
    }

    //cleanup
    return () => {
      //remove event listener
      if (smallButton) {
        smallButton.removeEventListener('click', makeCatBig);
      }
      if (bigButton) {
        bigButton.removeEventListener('click', makeCatBig);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none socials backdrop-blur-sm flex z-[21] relative items-center justify-center w-full h-fit">
      <ul className=" flex flex-row place-content-around w-full">
        <li className="steam-li pointer-events-auto">
          <a
            className="steam-a"
            href="https://steamcommunity.com/id/BigBadBodyPillow/"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <svg
              className="steam-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 25 3 C 13.59 3 4.209375 11.680781 3.109375 22.800781 L 14.300781 28.529297 C 15.430781 27.579297 16.9 27 18.5 27 L 18.550781 27 C 18.940781 26.4 19.389375 25.649141 19.859375 24.869141 C 20.839375 23.259141 21.939531 21.439062 23.019531 20.039062 C 23.259531 15.569063 26.97 12 31.5 12 C 36.19 12 40 15.81 40 20.5 C 40 25.03 36.430937 28.740469 31.960938 28.980469 C 30.560938 30.060469 28.750859 31.160859 27.130859 32.130859 C 26.350859 32.610859 25.6 33.059219 25 33.449219 L 25 33.5 C 25 37.09 22.09 40 18.5 40 C 14.91 40 12 37.09 12 33.5 C 12 33.33 12.009531 33.17 12.019531 33 L 3.2792969 28.519531 C 4.9692969 38.999531 14.05 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 31.5 14 C 27.92 14 25 16.92 25 20.5 C 25 24.08 27.92 27 31.5 27 C 35.08 27 38 24.08 38 20.5 C 38 16.92 35.08 14 31.5 14 z M 31.5 16 C 33.99 16 36 18.01 36 20.5 C 36 22.99 33.99 25 31.5 25 C 29.01 25 27 22.99 27 20.5 C 27 18.01 29.01 16 31.5 16 z M 18.5 29 C 17.71 29 16.960313 29.200312 16.320312 29.570312 L 19.640625 31.269531 C 20.870625 31.899531 21.350469 33.410625 20.730469 34.640625 C 20.280469 35.500625 19.41 36 18.5 36 C 18.11 36 17.729375 35.910469 17.359375 35.730469 L 14.029297 34.019531 C 14.289297 36.259531 16.19 38 18.5 38 C 20.99 38 23 35.99 23 33.5 C 23 31.01 20.99 29 18.5 29 z"></path>
            </svg>
          </a>
        </li>
        <li className="yt-li pointer-events-auto">
          <a
            className="yt-a"
            href="https://www.youtube.com/@bigbadbodypillow/playlists"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
          >
            <svg
              className="yt-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
          </a>
        </li>
        <li className="button-li pointer-events-auto">
          <a className="small-catC" id="small-cat" draggable="false">
            <svg
              className="block"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 96 96"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0,80) scale(0.100000,-0.100000)">
                <path
                  d="M451 538 c-10 -24 -49 -123 -86 -222 l-69 -178 16 -44 16 -44 -112 0
c-61 0 -117 4 -124 9 -8 4 -12 19 -10 32 2 20 8 24 38 23 19 -1 56 -5 83 -9
43 -7 47 -6 47 13 0 17 -11 23 -71 37 -80 18 -100 15 -129 -22 -27 -34 -25
-69 5 -99 25 -24 25 -24 206 -22 196 3 228 13 149 44 -43 17 -60 38 -60 76 0
17 123 359 136 376 1 2 17 -7 34 -20 45 -33 145 -33 190 0 17 13 33 22 34 20
1 -1 32 -82 69 -178 81 -213 84 -236 26 -265 -43 -23 -84 -19 -103 9 -18 29
-66 42 -96 26 -15 -8 -29 -8 -53 1 -27 10 -38 9 -65 -5 -31 -16 -50 -55 -37
-75 11 -19 31 -12 43 14 15 33 49 33 62 0 5 -14 16 -25 25 -25 9 0 20 11 25
25 13 34 47 33 62 -1 12 -25 15 -26 86 -22 68 3 76 6 103 35 52 59 49 77 -39
308 -44 114 -85 212 -91 218 -6 6 -23 -2 -52 -26 -23 -20 -54 -39 -70 -42 -40
-9 -90 10 -124 45 -16 17 -33 30 -37 30 -5 0 -17 -19 -27 -42z"
                />
                <path
                  d="M520 330 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13
0 -20 -7 -20 -20z"
                />
                <path
                  d="M670 330 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13
0 -20 -7 -20 -20z"
                />
              </g>
            </svg>
          </a>
          <a className="big-catC hidden" id="big-cat" draggable="false">
            <svg
              className="block"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 96 96"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0,96) scale(0.100000,-0.100000)">
                <path
                  d="M456 941 c-10 -16 -176 -763 -176 -791 0 -14 9 -42 19 -63 l19 -37
-112 0 c-116 0 -136 6 -136 42 0 27 25 32 87 18 39 -8 58 -9 66 -1 18 18 -10
38 -74 50 -52 11 -64 10 -85 -4 -50 -32 -51 -110 -3 -135 10 -6 103 -10 208
-10 184 0 191 1 191 20 0 13 -7 20 -19 20 -63 0 -113 46 -113 104 0 28 149
716 157 724 2 2 16 -6 32 -17 46 -34 109 -37 165 -8 42 21 48 22 52 8 3 -9 39
-169 81 -356 49 -219 74 -351 71 -370 -9 -42 -44 -74 -88 -81 -28 -5 -38 -11
-38 -25 0 -15 7 -19 31 -19 77 0 143 66 142 144 -1 32 -145 700 -169 779 -8
24 -18 22 -70 -18 -66 -50 -134 -45 -188 14 -20 22 -41 27 -50 12z"
                />
                <path
                  d="M513 714 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17
-16z"
                />
                <path
                  d="M663 714 c-8 -21 13 -42 28 -27 13 13 5 43 -11 43 -6 0 -13 -7 -17
-16z"
                />
                <path
                  d="M425 420 c-10 -16 64 -372 81 -391 12 -14 32 -17 95 -17 47 0 85 6
96 13 21 16 95 373 81 392 -23 29 -36 -5 -68 -170 -18 -95 -38 -178 -45 -186
-28 -29 -35 -1 -35 140 0 117 -3 141 -15 146 -9 3 -19 2 -23 -2 -4 -3 -9 -70
-12 -148 -5 -134 -6 -142 -25 -142 -18 0 -24 19 -56 176 -19 96 -39 181 -43
187 -9 14 -23 15 -31 2z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li className="discord-li pointer-events-auto">
          <a
            className="discord-a"
            href="https://discord.com/users/244425759739871233"
            target="_blank"
            draggable="false"
          >
            <svg
              className="discord-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z"></path>
            </svg>
          </a>
        </li>
        <li className="github-li pointer-events-auto ">
          <a
            className="github-a"
            href="https://github.com/BigBadBodyPillow"
            target="_blank"
            draggable="false"
          >
            <svg
              className="github-svg"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
