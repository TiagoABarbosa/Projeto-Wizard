import logoWizard from 'assets/img/logo-wizard20.svg'

function NavBar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <img src={logoWizard} alt="Wizard 2.0" width="350" />
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
