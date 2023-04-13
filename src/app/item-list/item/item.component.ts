import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item:Item;
@Input() index:number;

  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {

    
  }

delete(index){
 this.itemservice.deleteItems(index);
}
}
