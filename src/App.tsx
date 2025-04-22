import Header from './component/Header/Header.tsx';
import { useTheme } from './context/ThemeContext.tsx';
import Main from './pages/Main/Main.tsx';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
