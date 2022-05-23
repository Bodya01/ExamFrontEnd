import Subject from "../subject-models/Subject";

type Exam = null | {
    id: number,
    examDate: Date,
    groupId: number,
    subjectId: number,
    subject: Subject
}

export default Exam;