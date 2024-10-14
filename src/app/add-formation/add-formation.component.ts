import { Component ,OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
import { Theme } from '../model/theme.model';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrl: './add-formation.component.css'
})
export class AddFormationComponent implements OnInit {
  newFormation= new Formation();
  themes! : Theme[];
  newIdThem! : number;
  newTheme! : Theme;

  constructor(private formationService:  FormationService , private router :Router,){
    
  }
  ngOnInit(): void{
    this.themes = this.formationService.listerTheme();
  }


  addFormation(){
    //console.log(this.newFormation);
    this.newTheme=this.formationService.consulterTheme(this.newIdThem);
    this.newFormation.theme=this.newTheme;
    this.formationService.ajouterFormation(this.newFormation);
    this.router.navigate(['formation']);
    }
}
