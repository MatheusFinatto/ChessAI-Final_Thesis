<h1 align="center">🚀 Inteligência Artificial para Xadrez - TCC 🎓</h1>

<p align="center">
  Este projeto é o resultado do meu Trabalho de Conclusão de Curso em Ciência da Computação. Trata-se de uma <strong>IA de Xadrez</strong> baseada no algoritmo <strong>Minimax</strong> com <strong>Alpha-Beta Pruning</strong>, integrada com:
</p>

<ul>
  <li>🌐 <strong>Lichess Bot</strong> para jogar contra o Stockfish diretamente no <a href="https://lichess.org/" target="_blank">Lichess</a>.</li>
  <li>👤 <strong>Interface Front-End</strong> para partidas humanas e acesso de pessoas no geral.</li>
  <li>⚙️ <strong>Back-End</strong> para gerenciar lógica e integração (ambiente Python).</li>
</ul>

<hr />

<h2>📂 Estrutura do Projeto</h2>
<ul>
  <li><strong><code>back/</code></strong>: Código para o back-end da aplicação.</li>
  <li><strong><code>front/</code></strong>: Código para a interface front-end.</li>
  <li><strong><code>lichess-bot/</code></strong>: Código para o bot que interage com o Lichess.</li>
</ul>

<hr />

<h2>💻 Como Executar o Projeto</h2>
<p>(A partir de uma VM Ubuntu nova com repo clonado)</p>

<h3>1️⃣ Configuração do Back-End</h3>
<pre>
<code>
  
cd back
  
sudo apt install python3.12-venv

python3 -m venv back

source ./back/bin/activate

pip install -r requirements.txt

python3 app.py

</code>
</pre>
<p>O servidor estará disponível para gerenciar as partidas.</p>

<h3>2️⃣ Configuração do Front-End</h3>
<pre>
<code>
  
cd front
  
sudo apt install npm

npm i

npm run dev
</code>
</pre>
<p>Abra o navegador em <a href="http://localhost:5173" target="_blank">localhost:5173</a> para acessar a interface.</p>

<h3>3️⃣ Configuração do Lichess Bot</h3>
Necessário login e senha para inicio do bot dentro do ambiente lichess!
Portanto, essa parte não é possível ser acessada por qualquer pessoa.
<pre>
<code>

python3 -m venv bot

source ./bot/bin/activate

pip install -r requirements.txt

python lichess-bot.py
</code>
</pre>
<p>O bot será ativado e começará a jogar no <a href="https://lichess.org/" target="_blank">Lichess</a>.</p>

<hr />

<h2>🧠 Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Back-End:</strong> Python, Flask.</li>
  <li><strong>Front-End:</strong> React.js, Vite.</li>
  <li><strong>Algoritmos:</strong> Minimax, Alpha-Beta Pruning.</li>
  <li><strong>Integrações:</strong> Lichess API.</li>
</ul>