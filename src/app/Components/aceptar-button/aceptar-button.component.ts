import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aceptar-button',
  standalone: true,
  templateUrl: './aceptar-button.component.html',
  styleUrls: ['./aceptar-button.component.css']
})
export class AceptarButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>();

  onClick() {
    this.buttonClicked.emit(); // Emitir el evento al hacer clic
  }
}