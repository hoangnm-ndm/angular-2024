import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.scss',
})
export class LayoutClientComponent {}
