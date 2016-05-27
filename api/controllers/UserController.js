
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

                data.data = rows;

                return res.json(data);
            });

        });

    },

    create: function (req, res) {

        return res.view('user/create');
    },

    insert: function (req, res) {

        User.create(req.body).exec(function createCB(err, created) {
            console.log("ERR ----------------: "+err);
            console.log("ERR ----------------: "+err.Errors);
            console.log("ERR ----------------: "+err['email']);
            console.log("ERR ----------------: "+err.erro);

            if (err) {
                console.log('flash entro no erro');
                var listaDeErros = [];
                console.log(User);
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
                console.log('flash entro no acerto');
                flash = {
                    erros: null,
                    mensagem: "Sucesso ao salvar os dados",
                    tipo: "success"
                };
            }

            req.session.flash = flash;

            return res.redirect('user/create');
        });
    }

};
