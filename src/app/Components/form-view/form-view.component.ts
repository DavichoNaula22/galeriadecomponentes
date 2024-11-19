import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {
  @Input() backgroundColor: string = 'white'; // Color de fondo por defecto
  @Input() formData: { password: string, email: string, text: string } = { password: '', email: '', text: '' };


}