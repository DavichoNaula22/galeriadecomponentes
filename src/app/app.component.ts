import { Component } from '@angular/core';
import { FormComponent } from './Components/form/form.component'; // Asegúrate de importar FormComponent
import { FormViewComponent } from './Components/form-view/form-view.component'; // Asegúrate de importar FormViewComponent
import { SumativaWiComponent } from './Components/sumativa-wi/sumativa-wi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, FormViewComponent, SumativaWiComponent], // Asegúrate de incluir ambos componentes aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}