
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {MdInputModule} from '@angular/material';



import {MdSidenavModule} from '@angular/material';
import {MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule} from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { CustomerComponent } from './customer/customer.component';
import {FormControl, Validators} from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import {MdDatepickerModule} from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { ProductComponent } from './product/product.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ManufactureLineComponent } from './manufacture-line/manufacture-line.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    CustomerComponent,
    DeliveryComponent,
    EmployeeComponent,
    ProjectComponent,
    ProductComponent,
    TerminalComponent,
    ManufactureLineComponent,
    InvoiceComponent
  ],
  imports: [
  MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
