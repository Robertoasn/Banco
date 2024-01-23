const db = require('../database/conection')
const path = require('path')

class alunocontroller{
    home(req, res){
        res.render('home')
    }

    novoaluno(req, res){
        const {Matricula, Nome, Email, Turma, Serie, Sexo, Telefone, Endereco, Respnsavel} = req.body

        db.insert({Matricula, Nome, Email, Turma, Serie, Sexo, Telefone, Endereco, Respnsavel}).table('ALUNOS').then(data =>{
            console.log(data)
            res.json({message:'Aluno cadastrado com sucesso.'})
        }).catch(error =>{
            console.log(error)
        })
    }
    listaraluno(req, res){
        db.select("*").table("ALUNOS").then(
            alunos=>{
                //console.log(alunos)
                //res.json(alunos)
                res.render('listaralunos',{bancoalunos:alunos})
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    buscaraluno(req, res){
        const dados = req.params
        db.select("*").table("ALUNOS").where({Matricula:dados.Matricula}).then(
            alunos=>{
                console.log(alunos)
                if(alunos.length>0){
                    res.json(alunos)
                }else{
                    console.log("nenhum aluno")
                    res.json({message:"Nenhum aluno com esta matricula"})
                }
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    editaraluno(req, res){
        const {Matricula} = req.params
        const {Nome, Email, Turma, Serie, Sexo, Telefone, Endereco, Respnsavel} = req.body
        db.where({Matricula:Matricula}).update({Nome, Email, Turma, Serie, Sexo, Telefone, Endereco, Respnsavel}).table("ALUNOS").then(data=>{
            res.json({message: "Dados atualizados com sucesso"})
            console.log(data)
        }).catch(error=>{
            res.json(error)
        })
    }
    deletaraluno(req, res){
        const {Matricula} = req.params
        db.where({Matricula:Matricula}).del().table("ALUNOS").then(data=>{
            res.json({message: "Registro apagados com sucesso"})
            console.log(data)
        }).catch(error=>{
            res.json(error)
        })
    }
    formcadastro(req, res){
        res.render('front')
        //res.sendfile(path.join(__dirname, '../views/front.html'))
    }

    formeditaraluno(req, res){
        const dados = req.params
        db.select("*").table("ALUNOS").where({Matricula:dados.Matricula}).then(
            aluno=>{
                console.log(aluno)
                if(aluno.length>0){
                    res.render('editar', {aluno})
                }else{
                    console.log("nenhum aluno")
                    res.json({message:"Nenhum aluno com esta matricula"})
                }
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    formdeletar(req, res){
        const dados = req.params
        db.select("*").table("ALUNOS").where({Matricula:dados.Matricula}).then(
            aluno=>{
                console.log(aluno)
                if(aluno.length>0){
                    res.render('deletar', {aluno})
                }else{
                    console.log("nenhum aluno")
                    res.json({message:"Nenhum aluno com esta matricula"})
                }
            }
        ).catch(error=>{
            console.log(error)
        })
    }
}
module.exports = new alunocontroller()