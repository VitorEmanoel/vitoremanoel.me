const router = require('express').Router();

const Project = require('../../database/models/projects');

router.get("/", async (req, res)=>{

    Project.find().then((projects) =>{
        res.send(projects).status(200).end();
    }).catch(() =>{
        res.send({error: "Error in search projects"}).status(400).end();
    });

});

router.get("/:id", async (req, res) =>{

    Project.findById(req.params.id).then((projects) =>{
        res.send(projects).status(200).end();
    }).catch(()=>{
        res.send({error: "Error in search this project"});
    });

});

router.post("/", async (req, res)=>{

    Project.create(req.body).then(()=>{
        res.status(201).end();
    }).catch(()=>{
        res.send({error: "Error in create new project"}).status(400).end();
    });

});

router.put('/:id', async (req, res)=>{

    if(!await Project.findById(req.params.id))
        return res.send({error: "Not found this project"}).status(404).end();
    Project.updateOne({_id: req.params.id}, req.body).then(() =>{
        res.status(200).end();
    }).catch(()=>{
        res.send({error: "Error in update this project"}).status(400).end();
    })
});

module.exports = router;