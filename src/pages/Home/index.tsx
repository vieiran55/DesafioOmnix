import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import useFormInputValidation from 'react-form-input-validation';
import { useEffect } from 'react';


interface Props {
  inputcep: string
  setCep: React.Dispatch<React.SetStateAction<string>>
}


export default function Home({ inputcep, setCep }: Props) {
  const navigate = useNavigate();
  const [inputError, setInputError] = useState('');
  // const [cep, setCep] = useState('');
  // function cpfIsValid() {
  //   if (cep.length === 8) {
  //     navigate('/ofertas');
  //     alert('seu cep deve conter 8 digitos!');
  //     console.log(cep);
  //     return setCep(cep);
  //   }
  

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__text}>Bem Vindo!</h1>
      </header>
      <div>
        <form className={styles.informacoes}>
          <label>INFORME SEU CEP</label>
          <input required
            value={inputcep}
            onChange={e => setCep(e.target.value)}
            type='number'
          />
          <button type="submit" onClick={() => navigate('/ofertas')}>
            Continuar
          </button>
        </form>
      </div>
    </>
  );
}