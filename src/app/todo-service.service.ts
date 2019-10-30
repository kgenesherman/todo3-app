import { Injectable } from '@angular/core';
import { TextAst } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  texts: string[];

  constructor() {
    this.texts = [
      'Make breakfast',
      'Make lunch',
      'Make dinner'
    ];
   }



  getTexts(){
    return this.texts;
  };
}
