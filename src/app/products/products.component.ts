import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AppserviceService} from '../appservice.service';
import {Woocommerce} from '../Woocommerce';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  toolbar_title = 'Products List';
  result: any ;
  prodID: number;
  baseURL: any;
  consumer_secret: any;
  consumer_key: any;

  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  dataSource: MatTableDataSource<Woocommerce>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
