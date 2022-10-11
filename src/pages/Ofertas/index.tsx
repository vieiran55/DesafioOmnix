import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Ofertas.module.scss';

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
  console.log(valoresString[1]);

  // objectArray.forEach(([key, value]) => {
  //   console.log(key); // 'one'
  //   console.log(value); // 1
  // });

  // const entries = Object.entries(repositorio);
  // console.log(entries[1]);
  // const cep = entries[1];
  // const ceep = cep[1];
  // const x = ceep.toString();



  // Object.keys(repositorio).map(function(key, value) {
  //   console.log('"A chave é: "' + key);
  //   console.log('"O valor é: " '+ value);
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
      <div>
        <form method="get" action=".">
          <label>Cep:
            <input name="cep" type="text" id="cep" value={valoresString[0]} disabled /></label><br />
          <label>Rua:
            <input name="rua" type="text" id="rua" value={valoresString[1]} disabled /></label><br />
          <label>Complemento:
            <input name="bairro" type="text" id="bairro" value={valoresString[2]} disabled /></label><br />
          <label>Bairro:
            <input name="bairro" type="text" id="bairro" value={valoresString[3]} disabled /></label><br />
          <label>Cidade:
            <input name="cidade" type="text" id="cidade" value={valoresString[4]} disabled /></label><br />
          <label>Estado:
            <input name="uf" type="text" id="uf" value={valoresString[5]} disabled /></label><br />
        </form>
      </div>
    </>
  );
}