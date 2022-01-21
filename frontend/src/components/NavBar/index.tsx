import logoWizard from 'assets/img/logo-wizard20.svg'

function NavBar() {
  return (
    <>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={logoWizard} alt="Wizard 2.0" width="350" />
        </nav>
      </div>
   
    </div>

    <div>
           <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </a>
        <a className="py-2 d-none d-md-inline-block" href="/">Página Inicial</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer"href="/">Service Desk</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer"href="/">Material de Apoio</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer"href="/">Links úteis</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer"href="http://192.168.0.212/ASCCallCenter/monitor-mesa-operadora">Ramais</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer" href="https://ajuda.sankhya.com.br">Central de Ajuda</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer" href="http://downloads.sankhya.com.br/">Downloads</a>
        <a className="py-2 d-none d-md-inline-block" target="_blank" rel="noreferrer" href="http://downloads.sankhya.com.br/novidades.php">Novidades</a>
            
            </div>
        </nav>
    </div>
</>
  );
}

export default NavBar;
