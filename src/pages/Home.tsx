import styled from "styled-components";

import Wrapper from "../components/Wrapper";
import { Buttons } from "../snippets/Buttons";

type StyledButtonProps = {
  css?: string;
};

const StyledButton = styled.div<StyledButtonProps>`
  ${({ css }) => css}
`;
const Home = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-4">
        {Buttons.map((btn) => (
          <Wrapper key={btn.id} html={btn.html} css={btn.css}>
            <StyledButton
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
