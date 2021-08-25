class Footer extends HTMLElement {
    constructor() {
        super ();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer id=footer class="footer">
                <div class="container">
                <div class="row">
                    <div class="footer-col">
                    <h4>PERGUNTAS FREQUENTES</h4>
                    <ul>
                        <li><a href="quemsomos.html">QUEM SOMOS?</a></li>
                        <li><a href="origem.html">QUAL A ORIGEM?</a></li>
                        <li><a href="preço.html">EXISTE CUSTO?</a></li>
                        <li><a href="importante.html">AVISO IMPORTANTE</a></li>
                    </ul>
                    </div>
                    <div class="footer-col">
                    <h4>ENVIE UM EMAIL</h4>
                    <form class="emailbox" action="https://formsubmit.co/conhecimentodesimesmo@gmail.com" method="POST">
                        <input class="email-address" type="email" name="email" placeholder="seu.email@email.etc" required>
                        <input type="hidden" name="_subject" value="NOVO e-mail do site">
                        <input class="email-name" type="text" name="name" placeholder="NOME" required>
                        <textarea class="email-text" type="email" name="email" placeholder="DIGITE SUA MENSAGEM" required></textarea>
                        <input type="text" name="_honey" style="display:none">
                        <button class="email-send" type="submit">ENVIAR</button>
                        <input type="hidden" name="_autoresponse" value="Sua mensagem foi recebida. Logo entraremos em contato.">
                    </form>
                    </div>
                    <div class="footer-col">
                    <h4>CONTATOS</h4>
                    <div class="social-links">
                        <li> 
                        <a href="https://wa.me/554195394800">
                            <i class="fab fa-whatsapp fa-2x"></i> +55 41 9 9539-4800
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i class="far fa-envelope fa-2x"></i> conhecimentodesimesmo@gmail.com
                        </a>
                        </li>
                        <li>
                        <a href="https://www.youtube.com/c/ConhecimentodeSiMesmo/playlists">
                            <i class="fab fa-youtube fa-2x"></i> /c/ConhecimentodeSiMesmo
                        </a>
                        </li>
                        <li>
                        <a href="https://www.facebook.com/conhecimentodesimesmo">
                            <i class="fab fa-facebook-f fa-2x"></i> /conhecimentodesimesmo
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com/conhecimentodesimesmo/">
                            <i class="fab fa-instagram fa-2x"></i> @conhecimentodesimesmo
                        </a>
                        </li>
                        <li>
                        <a href="http://m.me/conhecimentodesimesmo">
                            <i class="fab fa-facebook-messenger fa-2x"></i> Facebook Messenger
                        </a>
                        </li>
                    </div>
                    </div>
                    <div class="footer-col">
                    <h4>NO MUNDO</h4>
                    <div class="mundo-links">
                        <li> 
                        <a href="http://www.conocimientodesimismo.com.mx/">
                            <img class="icon-paises" src="img/icon-paises/mexico.png" alt=""> MÉXICO
                        </a>
                        </li>
                        <li>
                        <a href="https://www.conocimientodesimismo.co/">
                            <img class="icon-paises" src="img/icon-paises/colombia.png" alt=""> COLÔMBIA
                        </a>
                        </li>
                        <li>
                        <a href="http://www.conocimientodesimismo.info/">
                            <img class="icon-paises" src="img/icon-paises/uruguay.png" alt=""> URUGUAI
                        </a>
                        </li>
                        <li>
                        <a href="https://conocimientodesi.com.ar/">
                            <img class="icon-paises" src="img/icon-paises/argentina.png" alt=""> ARGENTINA
                        </a>
                        </li>
                        <li>
                        <a href="http://www.knowledgeofoneself.website/">
                            <img class="icon-paises" src="img/icon-paises/united-states.png" alt=""> ESTADOS UNIDOS
                        </a>
                        </li>
                        <li>
                        <a href="https://www.facebook.com/TheRealInnerRevolution">
                            <img class="icon-paises" src="img/icon-paises/uniao-europeia.png" alt=""> ES | FR | UK | PT | IT
                        </a>
                        </li>
                    </div>
                    </div>
                </div> 
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer)