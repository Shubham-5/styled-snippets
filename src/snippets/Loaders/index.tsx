import { v4 as uuidv4 } from "uuid";

export const Loaders = [
  {
    id: uuidv4(),
    title: "Animated underline effect",
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
];
