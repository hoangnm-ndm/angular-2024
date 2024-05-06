import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ahihi',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello ca lop!</h1>',
  styles: 'h1 { color: red}',
})
export class AppComponent {
  title = 'WD18332';
}
