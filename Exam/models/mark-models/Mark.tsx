import Subject from "../subject-models/Subject";
import Student from "../user-models/Student";

type Mark = null | {
    id: number,
    partialMark: number,
    examMark: number,
    totalMark: number,
    isConfirmed: boolean,
    student: Student,
    subject: Subject
}

export default Mark;