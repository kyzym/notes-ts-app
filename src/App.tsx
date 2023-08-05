import { Provider } from 'react-redux';
import './App.css';
import { TableComponent } from './components/TableComponent/TableComponent';
import store from './redux/store';
import { MAIN_HEADERS, SUMMARY_HEADERS } from './utils/constants';

function App() {
  return (
    <Provider store={store}>
      <TableComponent headers={MAIN_HEADERS} />
      <TableComponent headers={SUMMARY_HEADERS} isSummary />
    </Provider>
  );
}

export default App;
