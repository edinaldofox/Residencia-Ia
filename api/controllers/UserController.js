
module.exports = {

    list: function (req, res) {

        return res.view('user/list', {req:req});
    },

    table: function (req, res) {

        var data = {};

        User.count().exec(function countCB(error, found) {

            data.recordsTotal    = found;
            data.recordsFiltered = found;

            User.find(req.queryModel, function(erro, rows) {
                var list = [];

                for (var i = 0; i < rows.length; i++) {
                    list[i] = {
                        id: rows[i].id,
                        name: rows[i].name,
                        email: rows[i].email
                    }
                }
                data.data = list;

                return res.json(data);
            });

        });

    },

    create: function (req, res) {

        return res.view('user/create');
    },

    insert: function (req, res) {

        User.create(req.body).exec(function createCB(err, created) {

            if (err) {

                var listaDeErros = [];

                if (err) {

                    var Erros = err.Errors;
                    for (campo in Erros) {
                        if (Erros[campo]) {
                            for (var i = 0; i < Erros[campo].length; i++) {

                                listaDeErros.push(Erros[campo][i].message);
                            }
                        }
                    }
                }

                flash = {
                    erros: listaDeErros,
                    mensagem: "Erro ao salvar os dados.",
                    tipo: "danger"
                };
            } else {

                flash = {
                    erros: null,
                    mensagem: "Sucesso ao salvar os dados",
                    tipo: "success"
                };
            }

            req.session.flash = flash;

            return res.redirect('user/create');
        });
    },

    edit: function (req, res) {

        User.find({ where: { id: req.param('id') }}, function(erro, row) {

            return res.view('user/edit', {
                user:row[0]
            });
        });

    },

    update: function (req, res) {

        User.update({id: req.body.id}, req.body).exec(function(erro, row) {

            flash = {
                erros: null,
                mensagem: "Sucesso ao salvar os dados",
                tipo: "success"
            };

            if (erro) {
                flash = {
                    erros: listaDeErros,
                    mensagem: "Erro ao salvar os dados.",
                    tipo: "danger"
                };
            }

            req.session.flash = flash;
            return res.redirect('user/edit/id/'+req.body.id);
        });

    },

};
