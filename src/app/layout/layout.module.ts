import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "@app/app-routing.module";
import { MenuComponent } from './components/header/menu/menu.component';


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }