import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formations : Formation [];
  formation! : Formation;
  constructor() {
    this.formations = [  { idFormation: 1, nomFormation: "Formation Développement Web", prixFormation: 1000, datedebut: new Date("2025-06-01"), datefin: new Date("2025-03-31"), modeFormation: "en ligne" },
      { idFormation: 2, nomFormation: "Développeur Front End - React JS", prixFormation: 500, datedebut: new Date("2025-10-02"), datefin: new Date("2025-05-10"), modeFormation: "en ligne" },
      { idFormation: 3, nomFormation: "Formation UX UI Design", prixFormation: 600, datedebut: new Date("2025-07-06"), datefin: new Date("2025-08-25"), modeFormation: "En personne" },
      { idFormation: 4, nomFormation: "Formation Design Graphique", prixFormation: 450, datedebut: new Date("2025-07-24"), datefin: new Date("2025-09-15"), modeFormation: "en ligne" }
    ];

  }
  listeFormation():Formation[] {
    return this.formations;
}
ajouterFormation( form: Formation){
this.formations.push(form);
}
supprimerFormation( form: Formation){
 
  const index = this.formations.indexOf(form, 0);
  if (index > -1) {
  this.formations.splice(index, 1);
  }
 
  }
  consulterformation(id: number): Formation {
    return this.formations.find(f => f.idFormation == id)!;
     
}


trierFormation(){
  this.formations = this.formations.sort((n1,n2) => {
  if (n1.idFormation! > n2.idFormation!) {
  return 1;
  }
  if (n1.idFormation! < n2.idFormation!) {
  return -1;
  }
  return 0;
  });
  }
  updateFormation(f:Formation)
  {

  this.supprimerFormation(f);
  this.ajouterFormation(f);
  this.trierFormation();
  }
 

}
