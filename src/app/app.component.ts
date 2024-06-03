import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    // tokenGetter: yourTokenGetter,
    // whitelistedDomains: yourWhitelistedDomains,
  },
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WD18332';
}
