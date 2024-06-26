import { v4 as uuidv4 } from "uuid";

export const Navbars = [
  {
    id: uuidv4(),
    title: "Animated underline effect",
    html: `
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
    </ul>
`,

    css: `
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        font: bold 1.5rem sans-serif;
        text-transform: uppercase;
        color: gray;
      }
      ul li {
        padding: 0 .5em .25em;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: .3s;
      }
      ul li:hover {
        color: #000000;
      }
      ul li:before {
        content: "";
        position: absolute;
        inset: calc(100% - 3px) 0 0 0; /* 3px = the thickness */
        background: #000000; /* the color */
        scale: 0 1;
        transition: .3s, translate 0s .3s;
      }
      ul:hover li:before {
        scale: 1;
      }
      ul li:hover:before {
        translate: 0;
        transition: .3s;
      }
      ul:hover li:has(~ li:hover):before {
        translate: 100% 0;
        transition: .2s .2s,scale 0s .4s;
      }
      ul:hover li:hover ~ li:before {
        translate: -100% 0;
        transition: .2s .2s,scale 0s .4s;
      }
     `,
  },
];
