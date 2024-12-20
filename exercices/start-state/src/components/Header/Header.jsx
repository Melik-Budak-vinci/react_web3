 
import { useState } from "react";
import "./Header.css";

const Header = ({ title, version }) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  return (
    <header onClick={() => setMenuPrinted(!menuPrinted)}>
      <h1 className="animate__animated animate__bounce">
        
        {menuPrinted ? `${title}... and rarely do we hate it!` : title}
      </h1>
      <h4>Version: {version}</h4>
    </header>
  );
};

export default Header;
