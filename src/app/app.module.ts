import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './customers/delete-customer/delete-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { SearchCustomerComponent } from './customers/search-customer/search-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    UpdateCustomerComponent,
    SearchCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
