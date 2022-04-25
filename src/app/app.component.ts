import { Component } from '@angular/core';
import { AzureFaceApiDataService } from './components/services/azure-face-api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Deja-Vu';
  constructor(private data: AzureFaceApiDataService) {
  }
}
