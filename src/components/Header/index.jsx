import styles from './Header.module.scss';

import Container from '@components/Container';
import Logo from '@components/Logo';
import Search from '@components/Search';
import Degrees from '@components/Degrees';

const Header = ({ scaleSelection, locationChange }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <Search locationChange={locationChange} />
          <Degrees scaleSelection={scaleSelection} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
