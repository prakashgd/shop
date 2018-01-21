import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  toolbar_name: string;
  @ViewChild('label') label: ElementRef;
  constructor(private router: Router) {

  }

  private navigation(name: string, link: string) {
    this.toolbar_name = name;
    this.router.navigate([`/${link}`]);
  }


  ngOnInit(): void {
    // this.navigation();
  }
}
