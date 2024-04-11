import React from 'react';
import EmployeeApi from '../api/EmployeeApi';

class DeleteEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    getListEmployee = async () => {
        try {
            // call api
            const data = await EmployeeApi.getAll();
            // using data
            this.setState({
                employees: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getListEmployee();
    }

    deleteEmployeeById = async (id) => {
        try {
            // call api
            await EmployeeApi.deleteByID(id);
            // reload list
            this.getListEmployee();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const personList = this.state.employees.map(
            employee =>
                <li key={employee.id} onClick={() => this.deleteEmployeeById(employee.id)}>
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

export default DeleteEmployee;



