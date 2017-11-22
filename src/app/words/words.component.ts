import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
    template: `
        <div>Words</div>
    `,
    selector: 'app-words',
    providers: [WordService]
})

export class WordsComponent {
    constructor(private wordService: WordService) {
        this.wordService.getAllWords()
        .then(words => console.log(words));
    }
}
