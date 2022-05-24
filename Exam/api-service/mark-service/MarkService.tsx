import Mark from "../../models/mark-models/Mark";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";


const route = APIRoutes.getMarkUrl();

const MarkService = {
    getStudentsMarks: (id: string) => APIService.get<Mark[]>(route + "by-student/" + id),

    updateMark: (mark: Mark) => APIService.put<Mark>(route + "update/", mark)
}

export default MarkService;