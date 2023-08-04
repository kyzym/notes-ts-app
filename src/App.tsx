import { Provider } from 'react-redux';
import './App.css';
import { TableComponent } from './components/TableComponent';

import store from './redux/store';

function AppContent() {
  return (
    <>
      <TableComponent
        headers={['Name', 'Created', 'Category', 'Content', 'Dates', '']}
      />
      <TableComponent
        headers={['Name Category', 'Active', 'Archived']}
        isSummary
      />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
