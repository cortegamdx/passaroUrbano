import { Http } from '@angular/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '../../node_modules/@angular/core';



@Injectable()
export class OfertaService{
     ofertas :Oferta [] ;
        
     constructor(private http: Http){

     }


    public getOfertas(): Promise<Oferta[]> {
        let url = "http://localhost:3000/ofertas?destaque=true";   
        
      return  this.http.get(url)
        .toPromise()
        .then((resposta : any) => resposta.json()); 
    }

    public getOfertasPorCategoria(categoria:string):Promise<Oferta[]>{

        let url = `http://localhost:3000/ofertas?categoria=${categoria}`;
        return this.http.get(url)
        .toPromise()
        .then((resposta : any) => resposta.json() );
    }

/*
    public getOfertas2():Promise<Oferta[]>{
        return new Promise((resolve, reject) =>{
            //Algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject.
            console.log("Será que passou por aqui ?");
          let deuCerto = true;

            if(deuCerto){
                 setTimeout(() => resolve(this.ofertas),3000);   
            }else{

                reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado.'});
            }
        }).then((ofertas:Oferta[]) => {
            //Fazer alguma tratativa.
            console.log('primeiro then');
            return ofertas;
        }).then((ofertas : Oferta[] ) =>{
            //fazer outra tratativa
            console.log('segundo then');
            return new Promise((resolve2,reject2) => {
                setTimeout(() => {resolve2(ofertas)}, 3000);
            })
        }).then((ofertas:Oferta[]) =>{
           console.log('Terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida');
            return ofertas;
        });
    }
    */
}