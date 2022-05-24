import Group from "../../models/group-models/Group";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getGroupUrl();

const GroupSerivce = {

    getGroups: async () => APIService.get<Group[]>(route),

    getGroupById: async (id : number) => APIService.get<Group[]>(route + id),

    getGroupsByTeacher: async (teacherId: string) => APIService.get<Group[]>(route + "by-teacher/" + teacherId),

};

export default GroupSerivce;