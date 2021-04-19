import express from "express";

const app = express();

/**
 * GET = Buscas 
 * POST = Criação
 * PUT = Alteração Ex: atualizar alguma informação
 * DELETE : Excluir
 * PATCH: Alterar uma informação específica 
 * Por ex: Alterar somente a senha do usuário, somente uma informação.
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05!",
    });
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!"})
})


app.listen(3333, () => console.log("Server is running on port 3333"));