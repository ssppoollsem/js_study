import logo from './logo.svg';
import './App.css';
import { Calendar } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <AreaChartOutlined />
                </p>
                <Calendar />
            </header>
        </div>
    );
}

export default App;
