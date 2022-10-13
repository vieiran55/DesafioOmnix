import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Ofertas.module.scss';
import equipamentos from 'dados/equipamentos.json';
import Itens from './Itens';

interface Props {
  inputcep: string
}

interface Opcoes {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string
  siafi: number
}

export default function Ofertas(props: Props) {

  const navigate = useNavigate();
  const { inputcep } = props;
  const [repositorio, setRepositorio] = useState<Opcoes[]>([]);
  // console.log(repositorio);
  // console.log(Object.keys(repositorio));
  // console.log(Object.values(repositorio));

  const objectArray = Object.entries(repositorio);
  const values = Object.values(repositorio);

  const valores = Object.values(repositorio);
  const valoresString = valores.map(function (item, indice) {
    return item.toString();
  });

  const cep = valoresString[0];
  const rua = valoresString[1];
  const complemento = valoresString[2];
  const bairro = valoresString[3];
  const cidade = valoresString[4];
  const estado = valoresString[5];

  // objectArray.forEach(([key, value]) => {
  //   console.log(key); // 'one'
  //   console.log(value); // 1
  // });
  useEffect(() => {
    // utilizamos uma função async
    async function carregaRepositorios() {
      //api do site z
      const resposta = await fetch(`https://viacep.com.br/ws/${inputcep}/json/`);
      //retornando o json da api
      const results = resposta.json();
      setRepositorio(await results);
    }
    carregaRepositorios();
    //definindo os 2 paramentros

  }, []);

  return (
    <>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'<- Voltar'}
        </button>
      </div>
      <div className={styles.container}>
        <form method="get" action="." className={styles.container__formulario}>
          <label>Cep:
            <input name="cep" type="text" id="cep" value={cep} disabled /></label><br />
          <label>Rua:
            <input name="rua" type="text" id="rua" value={rua} disabled /></label><br />
          <label>Complemento:
            <input name="bairro" type="text" id="bairro" value={complemento} disabled /></label><br />
          <label>Bairro:
            <input name="bairro" type="text" id="bairro" value={bairro} disabled /></label><br />
          <label>Cidade:
            <input name="cidade" type="text" id="cidade" value={cidade} disabled /></label><br />
          <label>Estado:
            <input name="uf" type="text" id="uf" value={estado} disabled /></label>
        </form>
      </div>
      <div className={styles.itens}>
        { equipamentos.map(item => (
          <Itens key={item.id} {...item}/>
        ))}
      </div>
      <div className={styles.botao}>
        <button className={styles.botao__errei} onClick={() => navigate(-1)}>
        Ops, errei meu cep!
        </button>
      </div>
    </>
  );
}