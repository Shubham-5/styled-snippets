import styled from "styled-components";

import Wrapper from "../components/Wrapper";
import { Buttons } from "../snippets/Buttons";

const Home = () => {
  const StyledButton = styled.div`
    ${({ css }) => css}
  `;
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-4">
        {Buttons.map((btn) => (
          <Wrapper>
            <StyledButton
              key={btn.id}
              css={btn.css}
              dangerouslySetInnerHTML={{ __html: btn.html }}
            />
          </Wrapper>
        ))}
      </div>
    </div>
  );
};

export default Home;
