import React from 'react';
import Contato from './Contato';

const App = () => {
    const contatos = [
        { nome: 'José', sobrenome: 'João', cpf: '000.000.000-00', telefone: '(84) 00000-0000', email: 'jj@exemplo.com' },
        { nome: 'Maria', sobrenome: 'Silva', cpf: '111.111.111-11', telefone: '(84) 11111-1111', email: 'as@exemplo.com' },
        { nome: 'Pedro', sobrenome: 'Oliveira', cpf: '222.222.222-22', telefone: '(84) 22222-2222', email: 'es@exemplo.com' },
        { nome: 'Ana', sobrenome: 'Costa', cpf: '333.333.333-33', telefone: '(84) 33333-3333', email: 'es@exemplo.com' },
        { nome: 'Carlos', sobrenome: 'Pereira', cpf: '444.444.444-44', telefone: '(84) 44444-4444', email: 'oh@exemplo.com' },
    ];

    return (
        <div>
            <h1>Contatos</h1>
            {contatos.map((contato, index) => (
                <Contato
                    key={index}
                    nome={contato.nome}
                    sobrenome={contato.sobrenome}
                    cpf={contato.cpf}
                    telefone={contato.telefone}
                    email={contato.email}
                />
            ))}
        </div>
    );
};

export default App;