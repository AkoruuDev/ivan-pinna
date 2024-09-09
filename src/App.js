import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <section className="container">      
        <img className="picture" src="./assets/tbg-pic-yellow.png" alt="logo-icon" />
        <div className="right-side">
          <h1 className="name">Ivan Pinna</h1>
          <nav className="menu">
            <a href="https://www.instagram.com/ivann_pinna/" target="_blank"><img src="./assets/instagram.png" alt="ico-instagram" /></a>
            <a href="https://www.youtube.com/channel/UCClIm_jbM7D7yhKRUQV39jg" target="_blank"><img src="./assets/youtube.png" alt="ico-youtube" /></a>
            <a href="https://www.linkedin.com/in/ivan-pinna-609bb6115/?originalSubdomain=br" target="_blank"><img src="./assets/linkedin.png" alt="ico-linkedin" /></a>
          </nav>
          <div className="description">
            <p>Empresário no ramo da educação há 11 anos. Multi franqueado Microlins. Idealizador e Fundador da Contrata Fácil. Criador do Método Start90. Analista de Perfil Comportamental. Treinador de Negócios. Mentor Empresarial e Especialista em Comportamento Humano.</p>
          </div>
          <div className="buttons">
          <a href="https://relatorio.mapeamentocontratafacil.com.br/r/contratafacil" target="_blank"><div className="btn">Perfil Comportamental</div></a>
          <a href="https://linguagens-do-amor.vercel.app/" target="_blank"><div className="btn">Linguagens do Amor</div></a>
          <a href="" target="_blank"><div className="btn">Ikigai</div></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
