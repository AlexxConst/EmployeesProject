import './app.css';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';

const data = [
  { name: 'Alex S.', salary: 18000, increase: false, id: 1 },
  { name: 'Ivan P.', salary: 3000, increase: true, id: 2 },
  { name: 'Igor V.', salary: 5000, increase: false, id: 3 },
];

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
