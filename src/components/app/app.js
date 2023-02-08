import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: "Gabriel",surname: "Placinta",salary: "3", deservesBonus: false, id: 1},
        {name: "Victor",surname: "Lanciu",salary: "95", deservesBonus: false, id: 2},
        {name: "Cristian",surname: "Berzoi",salary: "100000", deservesBonus: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    )
}

export default App;