import styled from "styled-components";

import Wrapper from "../components/Wrapper";
import { Snippets } from "../snippets";

type StyledSnippetProps = {
  css?: string;
};

const StyledSnippet = styled.div<StyledSnippetProps>`
  ${({ css }) => css}
`;
const Home = () => {
  return (
    <div className="mt-4 w-full">
      <div className="flex flex-wrap gap-4 justify-center">
        {Snippets.map((snippet) => (
          <Wrapper key={snippet.id} html={snippet.html} css={snippet.css}>
            <StyledSnippet
              css={snippet.css}
              dangerouslySetInnerHTML={{ __html: snippet.html }}
            />
          </Wrapper>
        ))}
      </div>
    </div>
  );
};

export default Home;
