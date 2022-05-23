import Subject from "../subject-models/Subject";
import Student from "../user-models/Student";

type Group = null | {
    id: number,
    name: string,
    students: Student[],
    subjects: Subject[],
}

export default Group;