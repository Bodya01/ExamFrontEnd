import Exam from "../../models/exam-models/Exam";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getExamUrl();

const ExamService = {
    getByGroup: async (id: number) => APIService.get<Exam[]>(route + "by-group/" + id),
};

export default ExamService;