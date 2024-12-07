import {
    commonTeamService,
    createTeamService,
    deleteTeamService, getOneTeamService,
    getTeamServices,
    updateTeamService
} from "../services/team-service.js";


export const createTeam = async (req, res) => {
    await createTeamService(req, res)
}
export const getTeams = async (req, res) => {
    await getTeamServices(req, res)
}

export const getTeam = async (req, res) => {
    await getOneTeamService(req, res)
}
export const deleteTeam = async (req, res) => {
    await deleteTeamService(req, res);
}
export const updateTeam = async (req, res) => {
    await updateTeamService(req, res)
}

export const commonTeam = async (req, res) => {
    await commonTeamService(req, res)
}