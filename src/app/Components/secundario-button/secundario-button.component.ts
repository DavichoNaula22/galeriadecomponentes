import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secundario-button',
  standalone: true,
  templateUrl: './secundario-button.component.html',
  styleUrls: ['./secundario-button.component.css']
})
export class SecundarioButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit(); // Emitir el evento al hacer clic
  }
}