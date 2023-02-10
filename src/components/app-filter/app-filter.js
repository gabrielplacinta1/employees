import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtnId: 1
        }
    }

    changeActiveBtn = (id) => {
        this.props.changeFilter(id);
        this.setState({
            activeBtnId: id
        })
    }
    
    render() {

        const {activeBtnId} = this.state;

        return (
            <div className="btn-group">
                <button className={`btn ${activeBtnId === 1 ? 'btn-light' : 'btn-outline-light'}`}
                        type="button"
                        onClick={() => this.changeActiveBtn(1)}>
                    All employees
                </button>
                <button className={`btn ${activeBtnId === 2 ? 'btn-light' : 'btn-outline-light'}`}
                        type="button"
                        onClick={() => this.changeActiveBtn(2)}>
                    For appraisal
                </button>
                <button className={`btn ${activeBtnId === 3 ? 'btn-light' : 'btn-outline-light'}`} 
                        type="button"
                        onClick={() => this.changeActiveBtn(3)}>
                    Salary more than 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;