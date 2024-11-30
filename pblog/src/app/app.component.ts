import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import CHEAT_SHEETS from "./cheat-sheets.json"

@Component({
    selector: 'app-root',
    imports: [
        RouterLink,
        RouterOutlet,
        MatMenuModule,
        MatButtonModule,
        CommonModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

  public CHEAT_SHEETS = CHEAT_SHEETS
}
