import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './infoEquipe.css'

export const InfoEquipe = () => {
    return (
        <section>
            <Header/>

            <main className="bg pt-5">
                <div id='card' className="col-lg-8 col-md-8 mx-auto bg-light p-4 rounded">       
                <h1 className="text-center">Sirius Development</h1><br />
                    <div className="grid-container">
                    <div id="allan" className="grid-item">
                        <h2>Allan Souza</h2>
                        <img className='foto' width="150" height="150" alt="imagem_allan" src="src/assets/img/infoEquipe/allan.jpeg"/><br />
                        <div class="d-flex justify-content-center">
                            <img src="src/assets/img/infoEquipe/linkedin.png" alt="" width="30px" />
                            <a href="https://www.linkedin.com/in/allan-victor-266ab6198/" target="_blank">Linkedin
                            </a><br />
                        </div>
                        <div class="d-flex justify-content-center mt-2">
                            <img src="src/assets/img/infoEquipe/github.png"  width="30px" />

                            <a href="https://github.com/Allan-Souza" class="mr-auto" target="_blank">Github</a> 
                        </div>
                    </div>     
                    <div id="Rodrigo" className="grid-item">
                        <h2>Rodrigo Santana</h2>
                        <img className='foto' width="150" height="150" alt="imagem_rodrigo" src="src/assets/img/infoEquipe/rodrigo.jpeg"/><br/>
                        <div class="d-flex justify-content-center">
                            <img src="src/assets/img/infoEquipe/linkedin.png" alt="" width="30px" />    
                            <a href="https://www.linkedin.com/in/rodrigoaster/" target="_blank">Linkedin</a><br />
                            
                        </div>
                        <div class="d-flex justify-content-center mt-2">
                            <img src="src/assets/img/infoEquipe/github.png" alt="" width="30px" />

                            <a href="https://github.com/rodrigoaster" class="mr-auto" target="_blank">Github</a>
                        </div>
                    </div>
                    <div id="Joyce" className="grid-item">
                        <h2>Joyce Almeida</h2>
                        <img className='foto' width="150" height="150" alt="imagem_joyce" src="src/assets/img/infoEquipe/joyce.jpeg"/><br/>                    
                        <div class="d-flex justify-content-center">
                            <img src="src/assets/img/infoEquipe/linkedin.png" alt="" width="30px" />
                            <a href="https://www.linkedin.com/in/joyce-almeida-ti/" target="_blank">Linkedin</a><br />
                        </div>
                        <div class="d-flex justify-content-center mt-2">
                            <img src="src/assets/img/infoEquipe/github.png" alt="" width="30px" />
                            <a href="https://github.com/JoyAlmDev" class="mr-auto" target="_blank">Github</a>
                        </div> 
                    </div> 
                </div>        
                </div>            
             </main>
             <Footer/>
        </section>
    )
    
}
