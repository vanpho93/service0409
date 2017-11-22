import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
    template: `
        <div>Words</div>
        <div>
            <input placeholder="English" />
            <br><br>
            <input placeholder="Vietnamese" />
            <br><br>
            <button>Add</button>
        </div>
        <div *ngFor="let word of words">
            <h3>{{word.en}}</h3>
            <p>{{word.vn}}</p>
            <button>Xoa</button>
        </div>
    `,
    selector: 'app-words',
    providers: [WordService]
})

export class WordsComponent {
    words = [];
    constructor(private wordService: WordService) {
        this.wordService.getAllWords()
        .then(words => this.words = words);
    }
}
