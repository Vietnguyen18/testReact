import React from 'react';
import EmployeeApi from '../api/EmployeeApi';

class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    getListEmployee = async () => {
        try {
            // call api
            const employees = await EmployeeApi.getAll();
            // using data
            this.setState({
                employees: employees
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getListEmployee();
    }

    render() {
        const personList = this.state.employees.map(
            employee =>
                <li key={employee.id}>
                    {employee.name}
                </li>
        );

        return (
            <ul>
                {personList}
            </ul>
        );
    }
}

export default EmployeeList;




