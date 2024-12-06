import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { ThemeProvider } from '../context/theme';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <ThemeProvider>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};
