import fastify from "fastify";

const servidor = fastify({
    logger: true
});

servidor.get("/", function controlador(req, res){
    const saudacao = 'Bem vindo ao primeiro servidor em Node.js'
    return res.send(saudacao)
});

servidor.listen({
    port: 3000
})