import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-personajes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter(); 
  

  onDeleteCharacter( index: string ):void {
    //TODO: Emitir el ID del personaje
    console.log(index);
    this.onDeleteID.emit(index);
  }
}
