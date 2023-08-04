import { Provider } from 'react-redux';
import './App.css';
import { TableComponent } from './components/TableComponent';

import { useAppSelector } from './hooks/hooks';
import store, { RootState } from './redux/store';

function AppContent() {
  const notes = useAppSelector((state: RootState) => state.notes);

  return (
    <>
      <TableComponent
        headers={['Name', 'Created', 'Category', 'Content', 'Dates', '']}
        data={notes}
        // renderRow={(note) => <RowComponent data={note} key={note.id} />}
      />
      <TableComponent
        headers={['Name Category', 'Active', 'Archived']}
        isSummary
        data={notes}
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
