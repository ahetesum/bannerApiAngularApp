import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<any> =[]
  constructor()
  {
    this.items=[
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
      {name: "<h3>Ahetesum</h3>" },
    ]
  }
}
