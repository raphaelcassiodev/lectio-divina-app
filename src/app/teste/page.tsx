'use client';
import { LinkMenu } from '@/components/link';
import { SelectBible } from '@/components/select';
import Image from 'next/image';
import Link from 'next/link';
export default function Teste() {
  function handleClick() {
    console.log('oi');
  }
  return (
    <div className="grid justify-center	gap-2">
      <h1 className="text-center">Lectio Divina</h1>
      <nav className="flex justify-center gap-10">
        <LinkMenu title="Voltar" link="#" handleClick={handleClick} />
        <LinkMenu title="Logout" link="#" handleClick={handleClick} />
        <LinkMenu title="FAQ" link="#" handleClick={handleClick} />
      </nav>
      <div className="content">
        <div className="inputs">
          <SelectBible
            livros={[
              { abr: 'genesis', name: 'Genesis' },
              { abr: 'ex', name: 'Exodo' },
            ]}
            capitulos={[1,2,3]}
            versiculos={[4,5,6]}
          ></SelectBible>
        </div>
        <div className="texto-biblico">
          <textarea disabled value={'Oi'}></textarea>
        </div>
      </div>
      <div className="descricao">
        <p>Passo: Você está iniciando a leitura</p>
        <span>
          <img
            className="block max-w-full"
            src="pergunta-para-fazer-login-em-circulos.png"
            alt=""
          />
        </span>
      </div>
      <div className="iniciar-tarefas">
        <button className="btn-iniciar">iniciar leitura</button>
        <div className="tarefas">
          <button className="btn-meditação btn">Iniciar meditação</button>
          <button className="btn">Iniciar tarefa</button>
          <button className="btn">Iniciar tarefa</button>
          <button className="btn">Iniciar tarefa</button>
        </div>
      </div>
    </div>
  );
}
function handleClick() {
  throw new Error('Function not implemented.');
}
