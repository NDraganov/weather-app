import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

import classes from "./footer.module.css";

export default function Footer() {
  const linkedHref = "https://www.linkedin.com/in/nedyalko-draganov-12958a235/";
  const gitHref = "https://github.com/NDraganov";
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <Link href={linkedHref} title="LinkedIn" target="_blank">
          <AiOutlineLinkedin />
        </Link>
        <Link href={gitHref} title="GitHub" target="_blank">
          <AiOutlineGithub />
        </Link>
      </div>
      <div>
        <p>Nedyalko Draganov</p>
      </div>
      <div className={classes.section}>
        <p>
          &copy;
          <span>{currentYear}</span>
        </p>
      </div>
    </footer>
  );
}
