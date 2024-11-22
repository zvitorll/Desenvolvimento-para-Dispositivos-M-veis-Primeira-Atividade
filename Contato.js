import React from 'react';

const Contato = ({ nome, sobrenome, cpf, telefone, email }) => {
    return (
        <div>
            <h3>Nome: {nome} {sobrenome}</h3>
            <p>CPF: {cpf}</p>
            <p>Contato: {telefone}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default Contato;