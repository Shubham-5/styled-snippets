import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="px-4 md:px-24 py-8 flex justify-between">
      <h2 className="font-semibold text-lg font-mono first-letter:text-4xl underline underline-offset-2">
        Styled Snippets
      </h2>
      <a href="https://github.com/Shubham-5/styled-snippets" target="_blank">
        <FaGithub size={24} className="cursor-pointer hover:opacity-50" />
      </a>
    </nav>
  );
};

export default Header;
