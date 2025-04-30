import { useTheme } from '../providers/ThemeProvider.tsx';
import { Header } from '../../widgets/header/ui/index.ts';
import { MainPage } from '../../pages/main/index.ts';

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}

export default BaseLayout;
