const express = require("express");
const data = require("../data.json").data;
const projects = data.projects;
const router = express.Router();

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    const projectName = projects[id].project_name;
    const projectDescription =projects[id].description;
    const projectLiveLink = projects[id].live_link
    const projectGit = projects[id].github_link

    let templateData = {id,projectName,projectDescription,projectLiveLink,projectGit}
    res.render('project',templateData);
});
module.exports = router