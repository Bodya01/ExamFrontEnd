import Group from "../../models/group-models/Group";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const route = APIRoutes.getGroupUrl();

const GroupSerivce = {

    getGroups: async () => APIService.get<Group[]>(route),

};

export default GroupSerivce;