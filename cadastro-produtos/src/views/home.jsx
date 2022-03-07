import React from "react";

//#region Home
function Home(){
    return(
    <div className="jumbotron">
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">Este é seu sistema use  para cadastrar seus produtos, utilize a barra de navegação para acessar as páginas</p>
        <hr className="my-4"/>
       
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
        </p>
    </div>

    )
}

export default Home;

//#endregion