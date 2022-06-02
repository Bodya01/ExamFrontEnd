import ChangeAccountModel from "../../models/user-models/ChangeAccountModel";
import Student from "../../models/user-models/Student";
import APIConfig from "../APIConfig";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";


const route = APIRoutes.getStudentUrl();

const StudentService = {
    getStudentsByGroup: (id: number) => APIService.get<Student[]>(route + "by-group/" + id),

    updateBankAccount: (props: ChangeAccountModel) => APIService.put<Student>(APIConfig.URL + "api/users/change-bank-account", props),
}

export default StudentService;