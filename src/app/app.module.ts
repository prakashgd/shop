import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppserviceService} from './appservice.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsComponent } from './products/products.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { PlaceOrderComponent } from './place-order/place-order.component';


@NgModule({
  declarations: [

    AppComponent,
    OrderDetailsComponent,
    ProductsComponent,
    BsNavbarComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'orders', component: OrderDetailsComponent},
      { path: 'products', component: ProductsComponent},
      // { path: 'place-orders', component: ProductsComponent},

    ])
  ],
  providers: [ AppserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
