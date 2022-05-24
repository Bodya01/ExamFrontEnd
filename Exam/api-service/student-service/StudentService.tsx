import Student from "../../models/user-models/Student";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";


const route = APIRoutes.getStudentUrl();

const StudentService = {
    getStudentsByGroup: (id: number) => APIService.get<Student[]>(route + "by-group/" + id),
}

export default StudentService;