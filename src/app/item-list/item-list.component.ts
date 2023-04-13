import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
 
  items:Item[]=[];
  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {
   this.items=this.itemservice.getItems();
   this.itemservice.itemAdded
   .subscribe((Items:Item[])=>{
     this.items=Items;
   })
  }
  selecteditem(index:number){
    const itemselected=this.itemservice.getItem(index);
     this.itemservice.itemSelected.next(itemselected);
  }

}
