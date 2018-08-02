import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertaService } from './../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[OfertaService]
})
export class RestaurantesComponent implements OnInit {
 private ofertas : Oferta[];

  constructor(private ofsertaService:OfertaService) { }


  ngOnInit() {
  this.ofsertaService.getOfertasPorCategoria('restaurante')
  .then((ofertas:Oferta[]) =>{
    console.log(ofertas);
    this.ofertas = ofertas;
  });
  }

}
