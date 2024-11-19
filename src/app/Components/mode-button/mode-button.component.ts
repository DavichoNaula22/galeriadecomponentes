import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mode-button',
  standalone: true,
  templateUrl: './mode-button.component.html',
  styleUrls: ['./mode-button.component.css']
})
export class ModeButtonComponent {
  @Output() modeChanged = new EventEmitter<boolean>(); // Emisor de evento para el cambio de modo

  isDarkMode = false; // Estado del modo oscuro

  onModeToggle() {
    this.isDarkMode = !this.isDarkMode; // Cambiar el estado del modo
    this.modeChanged.emit(this.isDarkMode); // Emitir el evento con el nuevo estado
  }
}