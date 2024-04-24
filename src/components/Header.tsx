import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="px-4 md:px-24 py-8 flex justify-between">
      <h2 className="font-medium text-lg">Styled Snippets</h2>
      <a
        href="https://github.com/Shubham-5/styled-snippets"
        target="_blank"
        className="cursor-pointer"
      >
        <FaGithub size={24} />
      </a>
    </nav>
  );
};

export default Header;
