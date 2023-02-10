import './app-info.css';

const AppInfo = ({numberOfEmployees, increaseCandidates}) => {
    return (
        <div className="app-info">
            <h1>Employees count in company Y</h1>
            <h2>Total number of employees: {numberOfEmployees}</h2>
            <h2>The following will get a bonus: {increaseCandidates}</h2>
        </div>
    )
}

export default AppInfo;