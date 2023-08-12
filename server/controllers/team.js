const Team = require('../models/Team');
const User = require('../models/User');

//Create Team
const createTeam = async (req, res) => {
    try {
        const { userId, title, description, activeTasks } = req.body;
        const user = await User.findById(userId);

        const newTeam = new Team({
            title,
            description,
            owner: `${user.firstName} ${user.lastName}`,
            members: [],
            activeTasks: activeTasks || 0, // Set the default value or use the passed value
            tasks: [],
        });

        await newTeam.save();

        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
};


//GET TEAMS
const getTeams = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        const userTeams = await Team.find({ members: [user] });
        res.status(200).json(userTeams);
    } catch (error) {
        res.status(409).json({ msg: error.message });
    }
};

module.exports = { createTeam, getTeams }