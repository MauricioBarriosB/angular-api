import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<div>Header</div><router-outlet/>',
})

export class AppComponent {
  title = 'angular-api';
}
