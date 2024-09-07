import { FooterStyle } from "../css/FooterStyle"


const Footer=()=>{
    return(
        <FooterStyle>
           <div className="footer">
                <div className="sb_footer section_padding">
                <div className="sb_footer_links">
                        <div className="sb_footer_links_div">
                            <h4>Para empresas</h4>
                            <a href="/business">
                                <p>Planos</p>
                            </a>
                            <a href="/business">
                                <p>Descontos</p>
                            </a>
                            <a href="/business">
                                <p>Produtos em Lote</p>
                            </a>
                            </div>
                            <div className="sb_footer_links_div">
                            <h4>Suporte</h4>
                            <a href="/helpcenter">
                                <p>Podemos ajudar?</p>
                            </a>
                            <a href="/helpcenter">
                                <p>Atendimento ao cliente</p>
                            </a>
                            <a href="/helpcenter">
                                <p>Troca e devolução</p>
                            </a>
                            </div>
                            <div className="sb_footer_links_div">
                                <h4>Coming soon on</h4>
                                <div className="socialmedia">
                                </div>
                            </div>             
                    </div>
                    <hr/>
                    <div className="sb_footer_below">
                        <div className="sb_footer_copyright">
                            <p>
                                @2024 - todos os direitos reservados a SportX
                            </p>
                        </div>
                        <div className="sb_footer_below_links">
                            <a href="/termos"><div><p>Termos e condições</p></div></a>
                            <a href="/termos"><div><p>Privacidade</p></div></a>
                            <a href="/termos"><div><p>Segurança</p></div></a>
                            <a href="/termos"><div><p>Declaração de Cookies</p></div></a>
                        </div>

                    </div>
                </div>
           </div>
        </FooterStyle>
    )
}
export default Footer