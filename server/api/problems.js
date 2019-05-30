const router = require('express').Router()
const {Problem} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  const problems = await Problem.findAll()
  res.status(201).send(problems)
})

router.get('/:id', async (req, res, next) => {
  const problemId = Number(req.params.id)
  const problem = await Problem.findByPk(problemId)
  res.status(201).send(problem)
})
