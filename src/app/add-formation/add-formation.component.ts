import { Component ,OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrl: './add-formation.component.css'
})
export class AddFormationComponent implements OnInit {
  newFormation= new Formation();
  constructor(private formationService:  FormationService , private router :Router,){}
  ngOnInit(): void{}
  addFormation(){
    //console.log(this.newFormation);
    this.formationService.ajouterFormation(this.newFormation);
   this.router.navigate(['formation']);
    }
}
