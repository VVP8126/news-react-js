import Header from './component/Header/Header.tsx';
import Main from './pages/Main/Main.tsx';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
