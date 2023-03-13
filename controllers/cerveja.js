const database = require("../database");

exports.getNome = (req, res) =>{
    const query = 'SELECT * FROM cervejas WHERE LOWER(nome)=LOWER($1)'
    const values = [req.params.nome]
    database.query(query, values).then(
    (resultado) => {
        res.status(200).send({result: resultado.rows})
    },
        (erro) => {
        res.status(500).send({erro:erro})
        }
    )
}
exports.getNomeAbr = (req, res) =>{
    const query = "SELECT * FROM cervejas WHERE LOWER(nome) LIKE LOWER('%' || $1 || '%')";;
    const values = [req.params.nome]
    database.query(query, values).then(
    (resultado) => {
        res.status(200).send({result: resultado.rows})
    },
        (erro) => {
        res.status(500).send({erro:erro})
        }
    )
}
exports.getNac = (req, res) =>{
    const query = 'SELECT * FROM cervejas WHERE LOWER(nacionalidade)=LOWER($1)'
    const values = [req.params.nacionalidade]
    database.query(query, values).then(
    (resultado) => {
        res.status(200).send({result: resultado.rows})
    },
        (erro) => {
        res.status(500).send({erro:erro})
        }
    )
}
exports.getTipo = (req, res) =>{
    const query = 'SELECT * FROM cervejas WHERE LOWER(tipo)=LOWER($1)'
    const values = [req.params.tipo]
    database.query(query, values).then(
    (resultado) => {
        res.status(200).send({result: resultado.rows})
    },
        (erro) => {
        res.status(500).send({erro:erro})
        }
    )
}
exports.getAbv = (req, res) =>{
    const query = 'SELECT * FROM cervejas ORDER BY abv DESC;'
    database.query(query).then(
    (resultado) => {
        res.status(200).send({result: resultado.rows})
    },
        (erro) => {
        res.status(500).send({erro:erro})
        }
    )
}
