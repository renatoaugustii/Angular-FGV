import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  //Atualizando o ano para o footer

  currentYear(): number {
    return new Date().getFullYear();
  }
  
}
