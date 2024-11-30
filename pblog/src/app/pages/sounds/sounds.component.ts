import { Component } from '@angular/core';
import { SoundList } from '../../models';
import SOUND_LIST from "./sounds.json"

@Component({
    selector: 'app-sounds',
    imports: [],
    templateUrl: './sounds.component.html',
    styleUrl: './sounds.component.scss'
})
export class SoundsComponent {

  sounds: SoundList = SOUND_LIST

  public idToName(soundId: String) {
    return soundId.replace(/_/g, " ")
  }

  public capitalizeName(soundCategoryId: String) {
    let words = this.idToName(soundCategoryId)
    return words
        .split(" ")                        // Split the string into an array of words
        .map(word =>                       // Map over each word in the array
            word.charAt(0).toUpperCase() + // Capitalize the first letter of the word
            word.slice(1).toLowerCase()    // Add the rest of the word in lowercase
        )
        .join(" "); 
  }
}
