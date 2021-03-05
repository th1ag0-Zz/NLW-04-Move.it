import styles from '../styles/components/UserGithubLogin.module.css';

export function UserGithubLogin() {
  return (
    <div className={styles.container}>
      <div className={styles.box_login}>
        <img src="/logo-full-white.svg" alt="Moveit"/>
        <h1>Bem-vindo</h1>
        <p>
          <img src="/icons/github.svg" alt="github"/>
          Faça login com seu Github <br/> para começar
        </p>
        <form className={styles.formContainer} action="">
          <input placeholder="Digite seu username" required type="text"/>
          <button type="submit">
            <img src="/icons/arrow_right.svg" alt=""/>
          </button>
        </form>
      </div>
    </div>
  )
}