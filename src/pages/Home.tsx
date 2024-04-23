import styled from "styled-components";

import Wrapper from "../components/Wrapper";
import { Buttons } from "../snippets/Buttons";

type StyledButtonProps = {
  css?: string;
};

const Home = () => {
  const StyledButton = styled.div<StyledButtonProps>`
    ${({ css }) => css}
  `;
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-4">
        {Buttons.map((btn) => (
          <Wrapper html={btn.html} css={btn.css}>
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
