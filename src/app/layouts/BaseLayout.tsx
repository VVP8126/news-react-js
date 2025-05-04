import { useTheme } from '../providers/ThemeProvider.tsx';
import { Header } from '../../widgets/header/ui/index.ts';
// import { MainPage } from '../../pages/main/index.ts';
import { Outlet } from 'react-router';

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
