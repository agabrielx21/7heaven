import './App.css';
import logo from '../src/logo.png';
import mail from '../src/mail.jpg';
import phone from '../src/phone.png';

function App() {
  return (
      <html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta charSet="UTF-8"/>
      </head>
      <body>
      <img className="logo" src={logo}/>
      <div className="icons-container">
          <div className="icons-little-container">
              <img id="phone-icon" src={phone}/>
              <p className="white-p">+1 214-685-9348</p>
          </div>
          <div className="icons-little-container">
            <img id="mail-icon" src={mail}/>
            <p className="white-p more-padding">7heaven@office.com</p>
          </div>

      </div>
      <h1>From 7 to heaven, there's a cloud for you !</h1>
      <div className="container">
            <div className="card">
                <h2>Cine suntem noi?</h2>
                <p className="normal-p">Cu serviciile cloud blockchain, datele tranzacționale din mai multe surse pot fi colectate, integrate și partajate cu ușurință. Blockchain oferă integritatea datelor printr-o singură sursă de informații, eliminând dublarea datelor și sporind securitatea.</p>
                <p className="normal-p">Într-un sistem blockchain, frauda și datele falsificate sunt împiedicate deoarece datele nu pot fi modificate fără permisiunea unui cvorum al părților. Un registru blockchain poate fi partajat, dar nu modificat. Dacă cineva încearcă să modifice datele, toți participanții vor fi alertați și vor ști cine face încercarea.</p>
                <p className="normal-p">În contextul adoptării rapide și a unei piețe în valoare de 20 de miliarde de dolari până la sfârșitul anului 2024, blockchain-ul este pregătit să transforme lumea tehnologiei. Acesta este exact genul de atenție care atrage unii dintre cei mai motivați atacatori, indiferent de nivelul de îndemânare al acestora.</p>
            </div>
            <div className="card">
                <h2>Ce oferim?</h2>
                <ul>
                    <li>Conectarea a diverse sisteme de back-office și clienți on-premise sau în cloud, pentru a efectua tranzacții blockchain și a consuma evenimente blockchain.</li>
                    <li>Disponibilitate ridicată, securizat și scalabil, cu funcționalități încorporate pentru management și guvernanță identitate, control acces on-chain, performanțe la nivel enterprise, extindere dinamică și integrare analize.</li>
                    <li>Interfață cu utilizatorul operațional intuitivă, un set bogat de API-uri DevOps, aplicare de corecții și upgrade-uri gestionată, fără întreruperea activității, precum și de extindere dinamică, pentru fluxuri de lucru crescânde.</li>
                    <li>Evaluarea permanentă a securității sistemului oferit, cu identificarea de posibile riscuri și oferirea de recomandări de evaluare și optimizare</li>
                    <li>Plan de recuperare în caz de dezastru</li>
                    <li>Cursuri practice pentru personalul ce va fi implicat în sistemul cloud blockchain</li>
                </ul>
            </div>
            <div className="card">
                <h2>Furnizorul de servicii 7H BaaS va oferi:</h2>
                <ul>
                    <li>Managementul arhitecturii platformei</li>
                    <li>Rețele și infrastructură modulare, preconfigurate</li>
                    <li>Alocare resurselor</li>
                    <li>Securitatea datelor</li>
                    <li>Instrumente de creare și monitorizare a aplicațiilor</li>
                    <li>Suport pentru contracte inteligente (acorduri automatizate încorporate în codul blockchain)</li>
                    <li>Tablouri de bord pentru vizualizarea și analiza codului</li>
                    <li>Înregistrări auditabile ale tranzacțiilor</li>
                    <li>Conexiuni încorporate la serviciile necesare</li>
                    <li>Servicii profesionale</li>
                </ul>
            </div>
      </div>
      </body>
      </html>
  );
}

export default App;
