import React from 'react';

import meEncontra from './me-encontra.mp3';
import iGottaFeeling from './i-gotta-feeling.mp3';
import girlsJustWant from './girls-just-want-to-have-fun.mp3';
import beautifulGirls from './beautiful-girls.mp3';
import barbieGirl from './barbie-girl.mp3';

import charlieImage from './charlie-brown-jr.jpg';
import blackEyedPeasImage from './black-eyed-peas.jpg';
import cyndiImage from './cyndi-lauper.jpg';
import seanImage from './sean-kingston.jpg';
import aquaImage from './aqua.jpg';

function App() {
  const musicas = [
    {
      nome: 'Me Encontra',
      artista: 'Charlie Brown Jr.',
      musica: meEncontra,
      imagem: charlieImage,
    },
    {
      nome: 'I Gotta Feeling',
      artista: 'The Black Eyed Peas',
      musica: iGottaFeeling,
      imagem: blackEyedPeasImage,
    },
    {
      nome: 'Girls Just Want to Have Fun',
      artista: 'Cyndi Lauper',
      musica: girlsJustWant,
      imagem: cyndiImage,
    },
    {
      nome: 'Beautiful Girls',
      artista: 'Sean Kingston',
      musica: beautifulGirls,
      imagem: seanImage,
    },
    {
      nome: 'Barbie Girl',
      artista: 'Aqua',
      musica: barbieGirl,
      imagem: aquaImage,
    },
  ];

  return (
    <main className="pagina">
      <section className="cabecalho">
        <p className="tag">PLAYLIST</p>
        <h1>DATA CENTER DJ</h1>
        <p className="subtitulo">5 músicas diferentes</p>
      </section>

      <section className="tabela-musicas">
        <div className="cabecalho-tabela">
          <span>Nome música</span>
          <span>Controle música</span>
          <span>Figura</span>
        </div>

        {musicas.map((item, index) => (
          <article className="linha-musica" key={item.nome}>
            <div className="nome-musica">
              <span className="numero">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <strong>{item.nome}</strong>
                <small>{item.artista}</small>
              </div>
            </div>

            <div className="controle">
              <audio controls preload="metadata" src={item.musica}>
                Seu navegador não suporta o elemento de áudio.
              </audio>
            </div>

            <div className="figura">
              <img src={item.imagem} alt={`Capa de ${item.nome}`} />
            </div>
          </article>
        ))}
      </section>

      <footer>Site de Música • Trabalho de React</footer>
    </main>
  );
}

export default App;
