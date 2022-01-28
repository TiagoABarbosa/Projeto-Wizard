import logoWizard from "../../assets/img/logoWizard20.svg";
import logoSankhya from "../../assets/img/logoSankhya.svg";

function NavBar() {
    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-center p-2 px-md-4 mb-2 bg-dark border-bottom shadow-sm'>
                <div className='container'>
                    <nav className='my-2 my-md-0 mr-md-3 d-flex justify-content-between'>
                        <img src={logoWizard} alt='wizard 2.0' width='280' />
                        <img src={logoSankhya} alt='wizard 2.0' width='200' />
                    </nav>
                </div>
            </div>

            <nav className="site-header py-1 sticky-top" style={{'background-color': '#E5E5E5'}}>
                <div>
                    <div className='container d-flex flex-column flex-md-row justify-content-around'>
                        <a className='py-2' target='_blank' rel='noreferrer' href='https://pt.wikipedia.org/wiki/Assistente_(software)' title='O que é Wizard?'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='d-block mx-auto'>
                                <circle cx='12' cy='12' r='10'></circle>
                                <line x1='14.31' y1='8' x2='20.05' y2='17.94'></line>
                                <line x1='9.69' y1='8' x2='21.17' y2='8'></line>
                                <line x1='7.38' y1='12' x2='13.12' y2='2.06'></line>
                                <line x1='9.69' y1='16' x2='3.95' y2='6.06'></line>
                                <line x1='14.31' y1='16' x2='2.83' y2='16'></line>
                                <line x1='16.62' y1='12' x2='10.88' y2='21.94'></line>
                            </svg>
                        </a>
                        <a className='py-2 d-none d-md-inline-block' target='_blank' rel='noreferrer' href='https://ajuda.sankhya.com.br'>
                            Central de Ajuda
                        </a>
                        <a className='py-2 d-none d-md-inline-block' target='_blank' rel='noreferrer' href='https://skw.sankhya.com.br/mgepes/html5/PortalRH/Login.html'>
                            Portal RH
                        </a>
                        <div class='dropdown'>
                            <button type='button' class='btn dropdown-toggle' data-bs-toggle='dropdown'>
                                Material de Apoio
                            </button>
                            <ul class='dropdown-menu'>
                                <li>
                                    <a
                                        class='dropdown-item fw-normal'
                                        target='_blank'
                                        rel='noreferrer'
                                        href='https://docs.google.com/spreadsheets/d/1CiJZH-YarLeCleonhWIL7hdSq9vEN8jAz8kmg3js1o8/edit#gid=0'>
                                        Acesso Remoto FMC
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='http://servicedesk.us-east-1.elasticbeanstalk.com/'>
                                        Consulta de OS
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='https://www.freeformatter.com/html-formatter.html'>
                                        Formate HTML
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='https://jsonformatter.org/'>
                                        Formate JSON
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='https://sqlformat.org/'>
                                        Formate SQL
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a className='py-2 d-none d-md-inline-block' target='_blank' rel='noreferrer' href='http://downloads.sankhya.com.br/'>
                            Downloads
                        </a>
                        <a className='py-2 d-none d-md-inline-block' target='_blank' rel='noreferrer' href='http://192.168.0.212/ASCCallCenter/monitor-mesa-operadora'>
                            Ramais
                        </a>
                        <a className='py-2 d-none d-md-inline-block' target='_blank' rel='noreferrer' href='http://downloads.sankhya.com.br/novidades.php'>
                            Novidades
                        </a>

                        <div class='dropdown'>
                            <button type='button' class='btn dropdown-toggle' data-bs-toggle='dropdown'>
                                Links Úteis
                            </button>
                            <ul class='dropdown-menu'>
                                <li>
                                    <a class='dropdown-item fw-bold' target='_blank' rel='noreferrer' href='https://www.alura.com.br/'>
                                        Alura Cursos
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-bold' target='_blank' rel='noreferrer' href='https://descola.org/'>
                                        Descola Cursos
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='https://www.nfe.fazenda.gov.br/portal/principal.aspx'>
                                        Portal NF-e
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fst-normal' target='_blank' rel='noreferrer' href='https://developer.sankhya.com.br/'>
                                        Sankhya Developer
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='https://place.sankhya.com.br/#/login'>
                                        Sankhya Place
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='https://skw.sankhya.com.br/mge/'>
                                        Sankhya Produção
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item fw-normal' target='_blank' rel='noreferrer' href='http://www.sintegra.gov.br/'>
                                        Sintegra
                                    </a>
                                </li>
                                <li>
                                    <a class='dropdown-item' target='_blank' rel='noreferrer' href='https://www.sefaz.rs.gov.br/nfe/nfe-val.aspx'>
                                        Validador XML (NF-e)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
