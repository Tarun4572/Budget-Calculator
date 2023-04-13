import { Component, OnInit } from '@angular/core';
import { ItemService } from './items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  totalBudget:number=0;

  constructor(private itemservice:ItemService) {}

  ngOnInit() {
    this.itemservice.BudgetChanged
    .subscribe((newBudget:number)=>{
        this.totalBudget=newBudget;
     });
  }
}
