import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cancelar-button',
  standalone: true,
  imports: [],
  templateUrl: './cancelar-button.component.html',
  styleUrls: ['./cancelar-button.component.css']
})
export class CancelarButtonComponent {
  @Output() buttonClicked = new EventEmitter<void>(); // Emisor de evento

  onCancel() {
    this.buttonClicked.emit(); // Emitir el evento al hacer clic
  }
}