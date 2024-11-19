import { Component } from '@angular/core';
import { AceptarButtonComponent } from '../aceptar-button/aceptar-button.component';
import { CancelarButtonComponent } from '../cancelar-button/cancelar-button.component';
import { FormComponent } from '../form/form.component';
import { FormViewComponent } from '../form-view/form-view.component';
import { ModeButtonComponent } from '../mode-button/mode-button.component';
import { PrimarioButtonComponent } from '../primario-button/primario-button.component';
import { SecundarioButtonComponent } from '../secundario-button/secundario-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sumativa-wi',
  standalone: true,
  imports: [
    CommonModule,
    AceptarButtonComponent,
    CancelarButtonComponent,
    FormComponent,
    FormViewComponent,
    ModeButtonComponent,
    PrimarioButtonComponent,
    SecundarioButtonComponent
  ],
  templateUrl: './sumativa-wi.component.html',
  styleUrls: ['./sumativa-wi.component.css']
})
export class SumativaWiComponent {
  formViewPosition = { top: '0px', left: '0px' }; // Posición inicial del FormView
  formViewBackgroundColor = 'white'; // Color de fondo inicial
  isDarkMode = false; // Estado del modo oscuro
  formData = { password: '', email: '', text: '' }; // Datos del formulario

  // Arreglos de colores para los botones
  primarioColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E74C3C'];
  secundarioColors = ['#3498DB', '#2ECC71', '#9B59B6', '#E67E22', '#E74C3C', '#34495E'];

  // Índices para los colores actuales
  primarioColorIndex = 0;
  secundarioColorIndex = 0;

  // Método para manejar clic en el botón Primario
  onPrimarioButtonClick() {
    this.changeFormViewBackgroundColor(this.primarioColors[this.primarioColorIndex]); // Cambiar color
    this.primarioColorIndex = (this.primarioColorIndex + 1) % this.primarioColors.length; // Cambiar al siguiente color
  }

  // Método para manejar clic en el botón Secundario
  onSecundarioButtonClick() {
    this.changeFormViewBackgroundColor(this.secundarioColors[this.secundarioColorIndex]); // Cambiar color
    this.secundarioColorIndex = (this.secundarioColorIndex + 1) % this.secundarioColors.length; // Cambiar al siguiente color
  }

  // Método para manejar clic en el botón Aceptar
  onAceptarButtonClick() {
    this.moveFormViewToCenter('green'); // Mover y cambiar color a verde
    setTimeout(() => {
      this.moveFormViewBack(); // Volver a la posición original
      this.changeFormViewBackgroundColor('white'); // Restaurar color original
    }, 2000);
  }

  // Método para manejar clic en el botón Cancelar
  onCancelarButtonClick() {
    this.moveFormViewToCenter('red'); // Mover y cambiar color a rojo
    setTimeout(() => {
      this.moveFormViewBack(); // Volver a la posición original
      this.changeFormViewBackgroundColor('white'); // Restaurar color original
    }, 2000);
  }

  // Método para mover el FormView al centro
  moveFormViewToCenter(color: string) {
    this.formViewPosition = { top: '50%', left: '50%' }; // Posición centrada
    this.changeFormViewBackgroundColor(color); // Cambiar color de fondo
  }

  // Método para mover el Form View de vuelta a su posición original
  moveFormViewBack() {
    this.formViewPosition = { top: '0px', left: '0px' }; // Posición original
  }

  // Método para cambiar el color de fondo del FormView
  changeFormViewBackgroundColor(color: string) {
    this.formViewBackgroundColor = color; // Cambiar el color de fondo
  }

  // Método para manejar los cambios en los valores del formulario
  onFormValuesChange(values: { password: string; email: string; text: string }) {
    console.log('Form Values Changed:', values);
    this.formData = values; // Actualizar formData con los nuevos valores
  }

  onModeChanged(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode; // Actualizar el estado del modo oscuro
    this.updateTheme(); // Cambiar el tema de la aplicación
  }

  // Método para actualizar el tema de la aplicación
  updateTheme() {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-theme'); // Agregar clase para el modo oscuro
    } else {
      body.classList.remove('dark-theme'); // Remover clase para el modo claro
    }
    }


}