import './App.css';

import RouterView from './router/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavLink to='/' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
          去首页
        </NavLink> */}
        
        <RouterView></RouterView>
      </header>
    </div>
  );
}

export default App;
