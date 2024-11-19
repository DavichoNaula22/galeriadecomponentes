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
  styleUrls: ['./sumativa-wi.component.css'] // Cambié "styleUrl" a "styleUrls"
})
export class SumativaWiComponent {
  formViewVisible = true; // Controlar la visibilidad del FormView
  formViewPosition = { top: '0px', left: '0px' }; // Posición inicial del FormView
  formViewBackgroundColor = 'white'; // Color de fondo inicial
  isDarkMode = false; // Estado del modo oscuro
  formData = { password: '', email: '', text: '' }; // Datos del formulario

  // Método para manejar clic en el botón Primario
  onPrimarioButtonClick() {
    this.formViewVisible = true; // Cambiar el estado para mostrar el FormView
  }

  // Método para manejar clic en el botón Secundario
  onSecundarioButtonClick() {
    this.formViewVisible = false; // Cambiar el estado para ocultar el FormView
  }

  // Método para manejar clic en el botón Aceptar
  onAceptarButtonClick() {
    alert('Aceptado'); // Mostrar ventana emergente
    this.moveFormView(); // Mover el FormView
    this.changeFormViewBackgroundColor(); // Cambiar el color de fondo
  }

  // Método para manejar clic en el botón Cancelar
  onCancelarButtonClick() {
    alert('Cancelado'); // Mostrar ventana emergente
    this.changeFormViewBackgroundColor('red'); // Cambiar el color de fondo a rojo

    setTimeout(() => {
      this.formViewBackgroundColor = 'white'; // Volver al color original después de 3 segundos
    }, 3000);

    this.moveFormViewBack(); // Mover el FormView a su posición original
  }

  // Método para manejar el cambio de modo
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

  // Método para mover el FormView
  moveFormView() {
    this.formViewPosition = { top: '50px', left: '100px' }; // Nueva posición
  }

  // Método para mover el FormView de vuelta a su posición original
  moveFormViewBack() {
    this.formViewPosition = { top: '0px', left: '0px' }; // Posición original
  }

  // Método para cambiar el color de fondo del FormView
  changeFormViewBackgroundColor(color: string = 'green') {
    this.formViewBackgroundColor = color; // Cambiar el color de fondo
  }

  // Método para manejar los cambios en los valores del formulario
  onFormValuesChange(values: { password: string; email: string; text: string }) {
    console.log('Form Values Changed:', values);
    this.formData = values; // Actualizar formData con los nuevos valores
  }
}