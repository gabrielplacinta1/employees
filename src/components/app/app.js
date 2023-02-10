import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 1
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (name && salary) {
            const newItem = {
                name, 
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }

    onToggleProp = (id, field) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [field]: !item[field]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        switch(this.state.filter) {
            case 1: 
                if (!term.length) {
                    return items;
                }
                return items.filter(item => {
                    return item.name.indexOf(term) > -1
                });
            case 2: 
                if (!term.length) {
                    return items;
                }
                return items.filter(item => {
                    return item.name.indexOf(term) > -1 && item.rise
                });
            case 3:
                if (!term.length) {
                    return items;
                }
                return items.filter(item => {
                    return item.name.indexOf(term) > -1 && item.salary >= 1000
                });
            default: 
                if (!term.length) {
                    return items;
                }
                return items.filter(item => {
                    return item.name.indexOf(term) > -1
            });
        } 
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    changeFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    render() {
        const {data, term} = this.state;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo 
                    numberOfEmployees={this.state.data.length}
                    increaseCandidates={this.state.data.filter(item => item.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter changeFilter={this.changeFilter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
