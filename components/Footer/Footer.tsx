import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Denis Hrytsun</p>
          <p>
            Contact us:{' '}
            <a href="mailto:pleyden8@gmail.com">pleyden8@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
