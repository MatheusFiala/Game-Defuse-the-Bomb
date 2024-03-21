
// Servidor Web
const express = require('express');
const app = express();
const http = require('http');
const { join } = require ('node:path')
const server = http.createServer(app);

// Adiciona Suporte para os Sockets
const { Server } = require("socket.io");
const io = new Server(server);

// Rotas
app.use("/game-backup", express.static("game-backup",{}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/Fase1.html', (req, res) => {
  res.sendFile(__dirname + '/Fase1.html');
});


app.get('/Fase1.2.html', (req, res) => {
  res.sendFile(__dirname + '/Fase1.2.html');
});

app.get('/Fase1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase1-retaguarda.html');
});

app.get('/Fase1.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase1.2-retaguarda.html');
});

app.get('/voceperdeu.html', (req, res) => {
  res.sendFile(__dirname + '/voceperdeu.html');
});

app.get('/voceganhou.html', (req, res) => {
  res.sendFile(__dirname + '/voceganhou.html');
});

app.get('/telainicial.html', (req, res) => {
  res.sendFile(__dirname + '/telainicial.html');
});

app.get('/Fase1.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase1.3-retaguarda.html');
});

app.get('/Fase1.3.html', (req, res) => {
  res.sendFile(__dirname + '/Fase1.3.html');
});

app.get('/passardefase-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/passardefase-retaguarda.html');
});

app.get('/passardefase.html', (req, res) => {
  res.sendFile(__dirname + '/passardefase.html');
});

app.get('/Fase2.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.html');
});

app.get('/Fase2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2-retaguarda.html');
});

app.get('/Fase2.1.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.1.html');
});

app.get('/Fase2.1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.1-retaguarda.html');
});

app.get('/Fase2.2.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.2.html');
});

app.get('/Fase2.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.2-retaguarda.html');
});

app.get('/Fase2.3.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.3.html');
});

app.get('/Fase2.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.3-retaguarda.html');
});

app.get('/Fase2.4.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.4.html');
});

app.get('/Fase2.4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase2.4-retaguarda.html');
});

app.get('/passardefase2.html', (req, res) => {
  res.sendFile(__dirname + '/passardefase2.html');
});

app.get('/passardefase2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/passardefase2-retaguarda.html');
});

app.get('/Fase3.html', (req, res) => {
  res.sendFile(__dirname + '/Fase3.html');
});

app.get('/Fase3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Fase3-retaguarda.html');
});

app.get('/Bomba1.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.html');
});

app.get('/Bomba1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1-retaguarda.html');
});

app.get('/Bomba1.1.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.1.html');
});

app.get('/Bomba1.1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.1-retaguarda.html');
});

app.get('/Bomba1.2.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.2.html');
});

app.get('/Bomba1.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.2-retaguarda.html');
});

app.get('/Bomba1.3.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.3.html');
});

app.get('/Bomba1.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.3-retaguarda.html');
});

app.get('/Bomba1.4.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.4.html');
});

app.get('/Bomba1.4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba1.4-retaguarda.html');
});

app.get('/Bomba2.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.html');
});

app.get('/Bomba2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2-retaguarda.html');
});

app.get('/Bomba2.1.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.1.html');
});

app.get('/Bomba2.1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.1-retaguarda.html');
});

app.get('/Bomba2.2.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.2.html');
});

app.get('/Bomba2.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.2-retaguarda.html');
});

app.get('/Bomba2.3.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.3.html');
});

app.get('/Bomba2.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.3-retaguarda.html');
});

app.get('/Bomba2.4.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.4.html');
});

app.get('/Bomba2.4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba2.4-retaguarda.html');
});

app.get('/Bomba3.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.html');
});

app.get('/Bomba3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3-retaguarda.html');
});

app.get('/Bomba3.1.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.1.html');
});

app.get('/Bomba3.1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.1-retaguarda.html');
});

app.get('/Bomba3.2.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.2.html');
});

app.get('/Bomba3.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.2-retaguarda.html');
});

app.get('/Bomba3.3.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.3.html');
});

app.get('/Bomba3.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.3-retaguarda.html');
});

app.get('/Bomba3.4.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.4.html');
});

app.get('/Bomba3.4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba3.4-retaguarda.html');
});

app.get('/Bomba4.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.html');
});

app.get('/Bomba4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4-retaguarda.html');
});

app.get('/Bomba4.1.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.1.html');
});

app.get('/Bomba4.1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.1-retaguarda.html');
});

app.get('/Bomba4.2.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.2.html');
});

app.get('/Bomba4.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.2-retaguarda.html');
});

app.get('/Bomba4.3.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.3.html');
});

app.get('/Bomba4.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.3-retaguarda.html');
});

app.get('/Bomba4.4.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.4.html');
});

app.get('/Bomba4.4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba4.4-retaguarda.html');
});

app.get('/Bomba5.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.html');
});

app.get('/Bomba5-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5-retaguarda.html');
});

app.get('/Bomba5.1.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.1.html');
});

app.get('/Bomba5.1-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.1-retaguarda.html');
});

app.get('/Bomba5.2.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.2.html');
});

app.get('/Bomba5.2-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.2-retaguarda.html');
});

app.get('/Bomba5.3.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.3.html');
});

app.get('/Bomba5.3-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.3-retaguarda.html');
});

app.get('/Bomba5.4.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.4.html');
});

app.get('/Bomba5.4-retaguarda.html', (req, res) => {
  res.sendFile(__dirname + '/Bomba5.4-retaguarda.html');
});

app.get('/css/style.css', (req, res) => {
  res.sendFile(__dirname + '/css/style.css');
});

app.get('/canais.json', (req, res) => {
  res.sendFile(__dirname + '/canais.json');
});


// Setup da parte de Sockets
const usuários = {};
const canais = {}


 const fs = require('fs');
 const fileName = './canais.json';
 const file = require(fileName);
 file.key = "canais";


function criar_canal(canal) {
  // read file and make object
  let content = JSON.parse(fs.readFileSync('canais.json', 'utf8'));

  content[canal.toLowerCase()] = {"escolha": 0}
  fs.writeFileSync('canais.json', JSON.stringify(content));
  
}
function ler_canal(canal){
  let content = JSON.parse(fs.readFileSync('canais.json', 'utf8'));

  return content[canal.toLowerCase()]
}

function edit_canal(canal,param){

  let content = JSON.parse(fs.readFileSync('canais.json', 'utf8'));

  content[canal.toLowerCase()] = param
  fs.writeFileSync('canais.json', JSON.stringify(content));
  
}

function remove_canal(canal){
  let content = JSON.parse(fs.readFileSync('canais.json', 'utf8'));

  delete content[canal.toLowerCase()]; 
  fs.writeFileSync('canais.json', JSON.stringify(content));
}

 var escolha = 0;

 var tempo = 2000

    function Regressiva(){
        if (tempo) {
            tempo --
            console.log(tempo)

            if (tempo == 0) {
                clearInterval(relogio)
            }
        }
    }

io.on('connection', (socket) => {
  console.log(`[${socket.id}] Usuário_Conectado`);
  usuários[socket.id] = { id: socket.id };

  io.emit('atualizarListaUsuarios', Object.keys(usuários));

  socket.on('disconnect', () => {
    console.log(`[${socket.id}] Usuário_Desconectado`);
    delete usuários[socket.id];

    io.emit('atualizarListaUsuarios', Object.keys(usuários));
  });

  socket.on('escolhaUsuario', (escolhaUser) => {
  
    socket.join(escolhaUser['usuario']);


    
    console.log(escolhaUser);
    const escolhaNum = parseInt(escolhaUser['valorEscolhido']);
    console.log(escolhaNum);

    io.emit('escolhaNum',escolhaNum);

    canal = ler_canal(escolhaUser['usuario'])

    if(escolhaNum == canal['escolha'] ){
      io.to(escolhaUser['usuario']).emit('vitoria', true);
    }
    else{
      io.to(escolhaUser['usuario']).emit('vitoria', false);
    }

  
  });

  socket.on("iniciartempo",(i) =>{
    var relogio = setInterval(Regressiva, 1000);
  });

  socket.on('valorEscolhido', (valorEscolhido) => {
    socket.join(valorEscolhido['usuario']);



    var escolhacorreta = valorEscolhido['valorEscolhido']

    console.log(`Valor da Escolha Correta : ${valorEscolhido}`);
    console.log(valorEscolhido);
    console.log(canais[valorEscolhido['usuario']]);

    criar_canal(valorEscolhido['usuario'])
    edit_canal(valorEscolhido['usuario'],{"escolha":escolhacorreta})
    // canais[valorEscolhido['usuario']]['escolha'] = escolhacorreta
    
    socket.emit('escolhacorreta', escolha )
  });

  socket.on('criarSala', (nomeDaSala) => {
    canais[nomeDaSala] = {
      'escolha':0,
    }
    
    socket.join(nomeDaSala);
  });

  socket.on('nome', (usuarioEscolhido) => {
    var nomes = usuarioEscolhido;
    
    // conexão com banco de dados
    
    async function connect() {
      if (global.connection)
            return global.connection.connect();
     
        const { Pool } = require('pg');
        const pool = new Pool({
            connectionString: 'postgres://usr_dev:usr_dev@172.32.1.23:5432/dev'
        });
     
        const client = await pool.connect();
        console.log("Criou pool de conexões no PostgreSQL!");
    
        
        const res = await client.query('SELECT * FROM testes_praticos."Salas_Criadas"');
        console.log(res.rows);
        client.release();

        const Data = await client.query("SELECT to_char(now(), 'DD/MM/YYYY   |  HH24:MI:SS')");

        var Hora = (Data.rows[0]);
        
        const insert = await client.query('INSERT INTO testes_praticos."Salas_Criadas" VALUES($1,$2,$3)', [nomes ,'1/2', Hora]);
        console.log('Adicionado com sucesso');
    
        // client.release();
    
        global.connection = pool;
        // return pool.connect();

        socket.emit('Dados das Salas', res);
    }
    connect();
  });

  socket.on("NomeDupla:", (nomedupla) => {
  
    async function inserir(tempo) {

      const { Pool } = require('pg');
        const pool = new Pool({
            connectionString: 'postgres://usr_dev:usr_dev@172.32.1.23:5432/dev'
        });
     
        const client = await pool.connect();
        console.log("Criou pool de conexões no PostgreSQL!");
  
      const Insert_tempo = await client.query('INSERT INTO testes_praticos."Recordes" VALUES($1,$2)', [nomedupla , tempo]);
          console.log('Adicionado com sucesso em Recordes');
    }
    inserir(tempo);
    
  });
  
});

          
const NETWORK_IP = '0.0.0.0';
const PORT = 5000;

server.listen(PORT, NETWORK_IP, () => {
  console.log(`Rodando em: http://172.32.2.159:${PORT}`);
});