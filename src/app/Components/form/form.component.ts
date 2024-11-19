import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule] // Asegúrate de agregar FormsModule aquí
})
export class FormComponent {
  password: string = '';
  email: string = '';
  text: string = '';

  @Output() formValuesChange = new EventEmitter<{ password: string; email: string; text: string }>();

  onInputChange() {
    this.formValuesChange.emit({ password: this.password, email: this.email, text: this.text });
  }
}