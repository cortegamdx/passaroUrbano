import { Oferta } from './../shared/oferta.model';
import { OfertaService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertaService]
})
export class HomeComponent implements OnInit {
  public ofertas : Oferta[];

  constructor(private ofertaService : OfertaService) { }

  ngOnInit() {
   // this.ofertas = this.ofertaService.getOfertas()
   this.ofertaService.getOfertas().then((ofertas:Oferta []) =>{
    console.log("a função foi resolvida depois de 3 segundos")  
    this.ofertas = ofertas;
   }).catch((param: any) => {
    
      console.log(param)
    
    });
  }

}
