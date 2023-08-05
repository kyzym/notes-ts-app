import { Provider } from 'react-redux';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import { TableComponent } from './components/TableComponent/TableComponent';
import store from './redux/store';
import { MAIN_HEADERS, SUMMARY_HEADERS } from './utils/constants';

const router = createHashRouter([
  {
    path: '/notes',
    element: (
      <>
        <TableComponent headers={MAIN_HEADERS} />
        <TableComponent headers={SUMMARY_HEADERS} isSummary />
      </>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/notes" replace />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
