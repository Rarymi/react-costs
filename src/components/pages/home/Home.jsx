import styles from './Home.module.css';
import savings from '../../../images/savings.svg';
import LinkButton from '../../../globals/linkButton/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Costs</span>{' '}
      </h1>
      <p>Gerencia seu projetos agora mesmo!</p>
      <LinkButton to='/newproject' text='Criar novo projeto' />
      <img src={savings} alt='Costs' />
    </section>
  );
}

export default Home;
