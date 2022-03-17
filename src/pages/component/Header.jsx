import "../../assets/css/bootstrap.min.css";
import styles from "../../assets/css/StyleHome.module.css";

function Header() {
  return (
    <>
      <nav
        class={`navbar navbar-expand-lg navbar-dark bg-dark mb-3 ${styles.navbarEdit}`}
      >
        <div class="container-fluid justify-content-center">
          <a class={`${styles.navEdit} navbar-brand`} href="#">
            TO DO APP
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
