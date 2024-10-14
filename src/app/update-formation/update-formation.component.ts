import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
import { Theme } from '../model/theme.model';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styles: ``
})


  export class UpdateFormationComponent implements OnInit {
    currentFormation = new Formation();
    themes ?:Theme[];
    updatedThemId! : number;
  
    constructor(private activatedRoute: ActivatedRoute,
      private router :Router,
    private  FormationService:  FormationService) { }

    ngOnInit() {
    //console.log(this.route.snapshot.params.id);
    this.themes =this.FormationService.listerTheme();
    this. currentFormation = this.FormationService.consulterformation(this.activatedRoute.snapshot.params['id']);
    console.log(this. currentFormation);
   
   //this.updatedThemId=this.currentFormation.theme?.idTheme;
    
  
    
    }

    updateFormation()
{ 
  this.currentFormation.theme=this.FormationService.consulterTheme(this.updatedThemId);
this.FormationService.updateFormation(this.currentFormation);
this.router.navigate(['formation']);

}






  }
