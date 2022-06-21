const express = require("express");
const data = require("../data.json").data;
const projects = data.projects;
const router = express.Router();

router.get("/:id", (req, res,next) => {
    const { id } = req.params;
    const projectName = projects[id].project_name;
    const projectDescription = projects[id].description;
    const projectLiveLink = projects[id].live_link;
    const projectGit = projects[id].github_link;
    const projectThumbnail = projects[id].image_urls;
    const projectTechnologies = projects[id].technologies;
    let templateData = {
        id,
        projectName,
        projectDescription,
        projectLiveLink,
        projectGit,
        projectThumbnail,
        projectTechnologies,
    };
    res.render("project", templateData);
});

router.use((err,req,res,next)=>{
    err.status =404
    err.message = "Page doesn't exist!"
    res.status(404).render("notfound")
    console.log(err.status,err.message)
    
});

module.exports = router;
