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

  {
    id: uuidv4(),
    title: "loader",
    html: `
    <div class="loader">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
    `,

    css: `
    .loader {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    
    .loader div {
      width: 8%;
      height: 24%;
      background: rgb(128, 128, 128);
      position: absolute;
      left: 50%;
      top: 30%;
      opacity: 0;
      border-radius: 50px;
      box-shadow: 0 0 3px rgba(0,0,0,0.2);
      animation: fade458 1s linear infinite;
    }
    
    @keyframes fade458 {
      from {
        opacity: 1;
      }
    
      to {
        opacity: 0.25;
      }
    }
    
    .loader .bar1 {
      transform: rotate(0deg) translate(0, -130%);
      animation-delay: 0s;
    }
    
    .loader .bar2 {
      transform: rotate(30deg) translate(0, -130%);
      animation-delay: -1.1s;
    }
    
    .loader .bar3 {
      transform: rotate(60deg) translate(0, -130%);
      animation-delay: -1s;
    }
    
    .loader .bar4 {
      transform: rotate(90deg) translate(0, -130%);
      animation-delay: -0.9s;
    }
    
    .loader .bar5 {
      transform: rotate(120deg) translate(0, -130%);
      animation-delay: -0.8s;
    }
    
    .loader .bar6 {
      transform: rotate(150deg) translate(0, -130%);
      animation-delay: -0.7s;
    }
    
    .loader .bar7 {
      transform: rotate(180deg) translate(0, -130%);
      animation-delay: -0.6s;
    }
    
    .loader .bar8 {
      transform: rotate(210deg) translate(0, -130%);
      animation-delay: -0.5s;
    }
    
    .loader .bar9 {
      transform: rotate(240deg) translate(0, -130%);
      animation-delay: -0.4s;
    }
    
    .loader .bar10 {
      transform: rotate(270deg) translate(0, -130%);
      animation-delay: -0.3s;
    }
    
    .loader .bar11 {
      transform: rotate(300deg) translate(0, -130%);
      animation-delay: -0.2s;
    }
    
    .loader .bar12 {
      transform: rotate(330deg) translate(0, -130%);
      animation-delay: -0.1s;
    }    
    `,
  },
];
