import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>text</h1>
      </>
    </Provider>
  );
}

export default App;
