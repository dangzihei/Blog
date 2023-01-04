import './App.css';
import 'antd/dist/reset.css';
import RouterView from './router/index';
function App() {
  return (
    <div className="App">
        {/* <NavLink to='/' className={({ isActive }) => { return isActive ? 'selected' : '' }}>
          去首页
        </NavLink> */}
        
        <RouterView></RouterView>
      
    </div>
  );
}

export default App;
