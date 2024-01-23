const express = require('express')
const alunocontroller = require('../controllers/alunocontroller')
const router = express.Router()
const override = require('method-override')

router.use(override('_method'))
router.get('/', alunocontroller.home)
router.post('/cadastro', alunocontroller.novoaluno)
router.get('/listaraluno', alunocontroller.listaraluno)
router.get('/buscaraluno/:Matricula', alunocontroller.buscaraluno)
router.put('/editaraluno/:Matricula', alunocontroller.editaraluno)
router.get('/editaraluno/:Matricula', alunocontroller.formeditaraluno)
router.delete('/deletar/:Matricula', alunocontroller.deletaraluno)
router.get('/deletar/:Matricula', alunocontroller.formdeletar)
router.get('/formcadastro', alunocontroller.formcadastro)


module.exports = router