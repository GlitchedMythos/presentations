import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Phrase } from 'src/app/shared/models/phrase.model';

@Component({
  selector: 'app-nonsense-card',
  templateUrl: './nonsense-card.component.html',
  styleUrls: ['./nonsense-card.component.css']
})
export class NonsenseCardComponent {
  @Input()
  nonsense: Phrase;

  @Output()
  removeNonsense = new EventEmitter<Phrase>();

  remove() {
    this.removeNonsense.emit(this.nonsense);
  }
}
