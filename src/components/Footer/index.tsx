import style from "./style.module.scss";
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <p>
          &copy; created by <a href="https://www.nahuelrabey.com/" target="_blank">Nahuel Rabey</a>
        </p>
        <p>
          &#x2192; <a className={style.repo} href="https://github.com/nahuelrabey/zen-template"target="_blank">github repo</a>
        </p>
      </div>
    </footer>
  );
}
