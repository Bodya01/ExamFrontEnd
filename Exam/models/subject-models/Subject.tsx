import Teacher from "../user-models/Teacher";

type Subject = null | {
    id: number,
    name: string,
    teacherId: number,
    teachers: Teacher[]
}

export default Subject;