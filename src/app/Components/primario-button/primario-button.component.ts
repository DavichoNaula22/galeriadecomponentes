import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primario-button',
  standalone: true,
  templateUrl: './primario-button.component.html',
  styleUrls: ['./primario-button.component.css']
})
export class PrimarioButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit(); // Emitir el evento al hacer clic
  }
}