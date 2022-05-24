import Subject from "../../models/subject-models/Subject";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getSubjectUrl();

const SubjectService = {
    getByGroup: async (id: number) => APIService.get<Subject[]>(route + "by-group/" + id)
}

export default SubjectService;