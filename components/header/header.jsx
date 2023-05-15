import { TiWeatherPartlySunny } from "react-icons/ti";

import classes from "./header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <TiWeatherPartlySunny />
      <h2>HelioStorm</h2>
    </header>
  );
}
