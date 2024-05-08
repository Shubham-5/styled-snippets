import { v4 as uuidv4 } from "uuid";

export const CheckBoxes = [
  {
    id: uuidv4(),
    title: "Smooth checkbox",
    html: `
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
        </label>
        `,
    css: `
    .switch {
        --secondary-container: #3a4b39;
        --primary: #fafafa;
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.7em;
        height: 1.8em;
    }
    
    .switch input {
        display: none;
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #313033;
        transition: .2s;
        border-radius: 30px;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 20px;
        left: 0.2em;
        bottom: 0.2em;
        background-color: #aeaaae;
        transition: .4s;
    }
    
    input:checked + .slider::before {
        background-color: var(--primary);
    }
    
    input:checked + .slider {
        background-color: var(--secondary-container);
    }
    
    input:focus + .slider {
        box-shadow: 0 0 1px var(--secondary-container);
    }
    
    input:checked + .slider:before {
        transform: translateX(1.9em);
    }
    
        `,
  },

  {
    id: uuidv4(),
    title: "Squishy effect checkbox",
    html: `
    <div class="container">
        <input checked="" type="checkbox" id="cbx" class="hidden-xs-up">
        <label for="cbx" class="cbx"></label>
    </div>
    `,
    css: `
    .cbx {
        position: relative;
        top: 1px;
        width: 27px;
        height: 27px;
        border: 1px solid #c8ccd4;
        border-radius: 3px;
        vertical-align: middle;
        transition: background 0.1s ease;
        cursor: pointer;
        display: block;
       }
       
       .cbx:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 8px;
        width: 7px;
        height: 14px;
        opacity: 0;
        transform: rotate(45deg) scale(0);
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        transition: all 0.3s ease;
        transition-delay: 0.15s;
       }
       
       .lbl {
        margin-left: 5px;
        vertical-align: middle;
        cursor: pointer;
       }
       
       #cbx:checked ~ .cbx {
        border-color: transparent;
        background: #6871f1;
        animation: jelly 0.6s ease;
       }
       
       #cbx:checked ~ .cbx:after {
        opacity: 1;
        transform: rotate(45deg) scale(1);
       }
       
       .container {
        position: relative;
       }
       
       @keyframes jelly {
        from {
         transform: scale(1, 1);
        }
       
        30% {
         transform: scale(1.25, 0.75);
        }
       
        40% {
         transform: scale(0.75, 1.25);
        }
       
        50% {
         transform: scale(1.15, 0.85);
        }
       
        65% {
         transform: scale(0.95, 1.05);
        }
       
        75% {
         transform: scale(1.05, 0.95);
        }
       
        to {
         transform: scale(1, 1);
        }
       }
       
       .hidden-xs-up {
        display: none!important;
       }       
    `,
  },
];
