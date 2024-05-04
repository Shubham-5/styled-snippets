import { v4 as uuidv4 } from "uuid";

export const Loaders = [
  {
    id: uuidv4(),
    title: "Loading bar",
    html: `
    <div class="loader">
        <label>Redirecting...</label>
        <div class="loading"></div>
    </div>
    `,

    css: `
    .loader {
        width: 350px;
        height: 100px;
        border-radius: 10px;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        padding: 30px;
      }
      .loading {
        width: 100%;
        height: 10px;
        background: lightgrey;
        border-radius: 10px;
        position: relative;
      }
      .loading::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 10px;
        background: #002;
        border-radius: 10px;
        z-index: 1;
        animation: loading 0.6s alternate infinite;
      }
      label {
        color: #002;
        font-size: 18px;
        margin: 0 0 5px 0;
        animation: bit 0.6s alternate infinite;
      }
      
      @keyframes bit {
        from {
          opacity: 0.3;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes loading {
        0% {
          left: 25%;
        }
        100% {
          left: 50%;
        }
        0% {
          left: 0%;
        }
      }      
    `,
  },

  {
    id: uuidv4(),
    title: "",
    html: `
    <div class="loader">
        <span></span>
    </div>`,

    css: `
    .loader {
        --color: #a5a5b0;
        --size: 40px;
        position: relative;
        width: var(--size);
        height: var(--size);
      }
      
      .loader span {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1.5px solid var(--color);
        border-bottom: 1px solid transparent;
        border-radius: 100%;
        animation: keyframes-rotate .8s infinite linear;
      }
      
      @keyframes keyframes-rotate {
        0% {
          transform: rotate(360deg);
        }
      }
      `,
  },
];
