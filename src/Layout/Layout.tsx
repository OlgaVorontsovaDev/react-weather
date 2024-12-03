import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { ThemeProvider } from '../context/theme';
import { CityProvider } from '../context/city';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <CityProvider>
      <ThemeProvider>
        <Header />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </ThemeProvider>
    </CityProvider>
  );
};
