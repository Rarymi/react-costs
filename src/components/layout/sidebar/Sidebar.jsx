import { Link } from 'react-router-dom';
import Container from '../container/Container';
import styles from './Sidebar.module.css';
import logo from '../../../images/costs_logo.png';
function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Container>
        <Link to='/'>
          <img src={logo} alt='Costs' />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className={styles.item}>
            <Link to='/company'>Company</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Sidebar;
