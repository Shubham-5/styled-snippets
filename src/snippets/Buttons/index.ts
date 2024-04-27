import { v4 as uuidv4 } from "uuid";

export const Buttons = [
  {
    id: uuidv4(),
    title: "button with hover effect",
    html: `<button class="btn">Hover me</button>`,
    css: `background-color: #00bfa6;
    padding: 14px 40px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px dashed #00bfa6;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.4s;

    &:hover {
      background-color: #fff;
      color: #00bfa6;
      border: 2px dashed #00bfa6;
    }

    &:active {
        background-color: #87dbd0;
    }`,
  },

  {
    id: uuidv4(),
    title: "Button hover effect",
    html: `<button>hover me</button>`,
    css: `
    button {
        border: 0;
        background: transparent;
        position: relative;
        padding: 1rem 2rem;
        background: hsl(0 0% 96%);
        cursor: pointer;
    }
    
    button::after {
        content: "";
        background: white;
        position: absolute;
        inset: 0;
        mix-blend-mode: difference;
        scale: 0 1;
        transform-origin: 100% 50%;
        transition: scale 0.2s ease-in-out;
        pointer-events: none;
    }
    
    button:is(:hover, :focus-visible)::after {
        scale: 1 1;
        transform-origin: 0 50%;
    }  `,
  },
];
