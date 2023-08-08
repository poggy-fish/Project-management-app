const Team = require('../models/Team');
const User = require('../models/User');

//Create Team
const createTeam = async (req, res) => {
    try {
        const { userId, title, description } = req.body;
        const user = await User.findById(userId);

        const newTeam = new Team({
            title,
            description,
            owner: `${user.firstName} ${user.lastName}`,
            members: [],
            activeTasks,
            tasks: [],
        });
        await newTeam.save();

        const team = await Team.find();
        res.status(200).json(team);
    } catch (error) {
        res.status(409).json({ msg: error.msg });
    }
}

//GET TEAMS
const getTeams = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        const userTeams = await Team.find({ members: [ user ]});
        res.status(409).json(userTeams);
    } catch (error) {
        res.status(409).json({ msg: error.msg });
    }
}

module.exports = { createTeam, getTeams }