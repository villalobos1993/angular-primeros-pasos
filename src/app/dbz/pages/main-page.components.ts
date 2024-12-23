import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.components.html'
})

export class MainPageComponent  {
    constructor( private dbzService: DbzService){}
    get characters() : Character[]{
        return [...this.dbzService.characters];
    }

    onDeleteCharacter( id: string ):void{
        this.dbzService.deleteCharacterById( id );
    }

    addNewCharacter( character : Character){
        this.dbzService.addCharacter( character );
    }
}
 
   