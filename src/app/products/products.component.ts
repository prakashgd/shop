import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Woocommerce} from '../Woocommerce';
import {AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  result: any ;
  prodID: number;
  baseURL: any;
  consumer_secret: any;
  consumer_key: any;
  constructor(public http: HttpClient, private service: AppserviceService ) {
    this.baseURL = service.baseURL;
    this.consumer_secret = service.consumer_secret;
    this.consumer_key = service.consumer_key;
  }
  getProductDetails() {
    this.service.getProduct().subscribe(
      data => {
        this.result = data;
        console.log(this.result);
      }
    );
  }
  sendID(getID: any) {
    this.prodID = getID;
  }

  ngOnInit(): void {
    this.getProductDetails();
  }
}
