import Api from './Api';

class EmployeeApi {

    constructor() {
        this.url = "/employees";
    }

    getAll = () => {
        return Api.get(this.url);
    };

    getByID = (id) => {
        return Api.get(`${this.url}/${id}`);
    };

    create = (body) => {
        return Api.post(this.url, body);
    };

    updateByID = (id, body) => {
        return Api.put(`${this.url}/${id}`, body);
    }

    deleteByID = (id) => {
        return Api.delete(`${this.url}/${id}`);
    }
}

// export
const employeeApi = new EmployeeApi();
export default employeeApi;

