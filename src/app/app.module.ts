import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {AppserviceService} from './appservice.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsComponent } from './products/products.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule, MatButtonModule, MatSidenavModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatProgressBarModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {BaseRouterModule} from './router/router.module';

@NgModule({
  declarations: [

    AppComponent,
    OrderDetailsComponent,
    ProductsComponent,
    BsNavbarComponent,
    PlaceOrderComponent
  ],
  imports: [
    MatSelectModule,
    MatProgressBarModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatAutocompleteModule,
    MatMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BaseRouterModule
    // RouterModule.forRoot([
    //   // { path: '', component: AppComponent},
    //   { path: 'orders', component: OrderDetailsComponent},
    //   { path: 'products', component: ProductsComponent},
    // ])
  ],
  providers: [ AppserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
