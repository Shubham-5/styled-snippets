import styled from "styled-components";

const html = `<button class="btn">Hover me</button>`;
const css = ` background-color: #00bfa6;
padding: 14px 40px;
color: #fff;
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
}`;

const StyledButton = styled.div`
  ${css}
`;
export const Button1 = () => (
  <StyledButton dangerouslySetInnerHTML={{ __html: html }} />
);
