import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem key={item.id} name={item.name} surname={item.surname} salary={item.salary} deservesBonus={item.deservesBonus}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;




