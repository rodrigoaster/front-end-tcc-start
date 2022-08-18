import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './sobre.css'

export const Sobre = () => {
    return (
        <section>
            <Header/>

            <main id="bg1" className="container border-bottom border-top">
                <h1 className="extra-mg-t">Você sabia que a conta de energia do Brasil <strong>é a segunda mais cara do mundo?</strong></h1><br/>
                <div className="text-start">
                    <div className="container d-flex justify-content-between pt-3" >
                        <div>
                            <p className="extra-container-text-2 mt-5 pt-2 fs-5">O Brasil tem a segunda conta de energia elétrica mais cara do mundo, de acordo com um levantamento feito pela plataforma de cupons de descontos CupomValido.com.br, com dados da Associação dos Grandes Consumidores Industriais de Energia e de Consumidores Livres (Abrace). Segundo a pesquisa, o País fica atrás somente da Colômbia no custo da eletricidade.</p><br/>
                        </div>

                        <img src="src/assets/img/sobre/dinheirolamp.png" style={{width: '600px'}} />
                    </div>
                </div>
            </main>

            <main id="bg2" className="extra-mg-t container justify-content-between d-flex align-items-center border-bottom">
                <div className="container">
                    <h1>O que é o BF ENERGY?</h1><br/>
                    <p class="extra-mg-b">Quem nunca se preocupou com quando chegou a conta de energia em casa, quantos planos foram deixados de lado para dar prioridade a ela foi pensando nisso que o BF ENERGY. Esse projeto veio com o objetivo de ajudar pessoas a diminuirem uma preocupação que normalmente afeta boa parte dos brasileiros, em especial aqueles que vivem no Nordeste,  <strong>CONTA DE ENERGIA.</strong> Buscamos fazer você ler, entender e como economizar mais nos gastos causados por essa finança:</p>
                </div>

                <div class="img-bf">
                <img src="src/assets/img/logo/New-logo.png" alt="" width="500" height="500" className="d-inline-block align-text-top"/>
                </div>
            </main>

            <main id="bg3" className="mt-5 container text-start border-bottom">
                <h1>Calculadora de CONSUMO</h1><br/>
                <div className="container mt-3 d-flex justify-content-between" >
                    <div>
                        <p className="w-75 text-justify mt-5 pt-2 fs-5">Te oferecemos uma CALCULADORA DE CONSUMO, uma ferramenta muito útil, a qual iremos pedir informações sobre seu eletrodoméstico e sua utilização, como:</p><br/> 
                            <ul>
                                <li class="fs-3"><strong>Potência</strong></li>
                                <li class="fs-3"><strong>Quantidade de horas</strong></li>
                                <li class="fs-3"><strong>Quantidade de dias</strong></li>
                            </ul><br/>
                            
                       <p className="extra-container-text-2 fs-5"> Após isso, te oferecemos uma estimativa do quanto você gastará com esse eletrodoméstico!</p>
                    </div>

                    <img className="rounded-circle mb-3 pb-5" src="src/assets/img/sobre/calc.jpg" style={{width: '400px'}} />
                </div>
            </main>

            <main id="bg4" className="container text-start height-default extra-pt padd-y">
                <h1>Seu próprio PERFIL</h1><br/>
                <div className="container mt-5 d-flex justify-content-between" >
                    <div className="mt-5 mr-5 pt-5">
                        <p className="extra-container-text-2 nav-font-size">Tenha seu próprio PERFIL, o qual você poderá armazenar todos os <strong>registros</strong> que fizer utilizando nossa ferramente, caso queira consultar e alterar dados para <strong>novos registros!</strong></p>
                    </div>
                    <img src="src/assets/img/sobre/tableex.png" style={{width: '600px'}} />
                    {/* <img id="img2-bg4" src="src/assets/img/sobre/people.png" style={{width: '400px', height:'437px'}} /> */}
                </div>
            </main>
            <Footer/>
        </section>
    )
}