import Style from "./index.module.css";

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <nav className={Style.nav}>
        <ul className={Style.items}>
          <li className={Style.item}>
            <a href="/news">ニュース</a>
          </li>
          <li className={Style.item}>
            <a href="/members">メンバー</a>
          </li>
          <li className={Style.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <p className={Style.cr}>© SIMPLE. ALL Rights Reserved 2024</p>
    </footer>
  );
}
