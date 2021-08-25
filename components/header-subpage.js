class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="header">  
                <nav class="navbar">
                <div class="content">
                    <div class="logo">
                    <a href="../index.html">Conhecimento de Si Mesmo</a>
                    </div>
                    <ul class="menu-list">
                    <div class="icon cancel-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <li><a href="../conferencias.html">CONFERÊNCIAS</a></li>
                    <li><a href="../trabalhos.html">TRABALHOS</a></li>
                    <li><a href="../estudos.html">ESTUDOS</a></li>
                    <li><a href="../videos.html">VÍDEOS</a></li>
                    <li class="important-btn"><a href="../assista.html">ASSISTA ONLINE</a></li>
                    <li class="icon-wpp">
                        <a href="https://wa.me/554195394800">
                        <i class="fab fa-whatsapp"></i>
                        </a>
                    </li>
                    </ul>
                    <a href="javascript:void(0);" class="icon menu-btn" onclick="myFunction()">
                    <i class="fas fa-bars fa-lg"></i>
                    </a>
                </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header)