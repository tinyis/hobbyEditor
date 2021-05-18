import { Component, OnInit } from '@angular/core';
import {MyHobby} from './hobby';
import {HobbyService} from "./hobby.service"

@Component({
  selector: 'app-hobby',
  template: `<h1>{{hobby.title}}</h1>
            <p>{{hobby.description}}</p>
            <img [attr.src]="hobby.mainPicture"/>
            <img [attr.src]="hobby.portraitOfFamousPerson"/>
            <button class="btn btn-default" (click)="editHobbyOpen()">Edit</button>

            <form *ngIf="isDisplay" [ngClass]="editorClass" enctype="multipart/form-data">
            <div class="form-group">
            <label>Title</label>
                <input type="text" class="form-control" name="hobby.title" [(ngModel)]="hobby.title" value="hobby.title"/>
            </div>
            <div class="form-group">
            <label>Description</label>
                <input type="text" class="form-control" name="hobby.description" [(ngModel)]="hobby.description" value="hobby.description" />
            </div>
            <div class="form-group">
            <label>Main picture</label>
                <input id="mainPic" type="file" class="form-control" />
            </div>
            <div class="form-group">
            <label>Portrait of famous person</label>
                <input id="portrait" type="file" class="form-control" />
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-default" (click)="editHobby()">Edit</button>
            </div>
            </form>`,
  styles: ['.display{display:block}'],
  providers:[HobbyService]
})
export class HobbyComponent implements OnInit {

 hobby:MyHobby=new MyHobby();

  constructor(private hobbyService: HobbyService) { }

  isDisplay = false;
  editorClass={
      display: this.isDisplay,
  }

  editHobbyOpen(){

    this.isDisplay=true;
  }

  editHobby(){

    var input1: any = document.getElementById('mainPic');
    var mainPic:string = input1.files[0].value;

    var input2: any = document.getElementById('portrait');
    var portrait:string = input2.files[0].value;

    this.hobbyService.editHobby(this.hobby.title, this.hobby.description, mainPic, portrait);

    this.isDisplay=false;
  }

  ngOnInit(): void {
    this.hobby = this.hobbyService.getHobby();
  }

}
