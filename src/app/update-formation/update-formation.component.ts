import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styles: ``
})


  export class UpdateFormationComponent implements OnInit {
    currentFormation = new Formation();
  
    constructor(private activatedRoute: ActivatedRoute,
      private router :Router,
    private  FormationService:  FormationService) { }

    ngOnInit() {
    //console.log(this.route.snapshot.params.id);
    this. currentFormation = this.FormationService.consulterformation(this.activatedRoute.snapshot.params['id']);
    console.log(this. currentFormation);
    
  
    
    }

    updateFormation()
{ 
this.FormationService.updateFormation(this.currentFormation);
this.router.navigate(['formation']);

}






  }
