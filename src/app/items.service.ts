import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class ItemService{
      items:Item[]=[];
      itemAdded=new Subject<Item[]>();
      itemSelected=new Subject<Item>();

      totalBudget:number=0;
      BudgetChanged=new Subject<number>();

      addItems(item:Item){
        this.items.push(item);
        this.totalBudget+=item.amount;
        this.itemAdded.next(this.items);
        this.BudgetChanged.next(this.totalBudget);
        
      }

      getItems(){
          return this.items.slice();
      }
      deleteItems(index:number){
        const item=this.items[index];
        this.items.splice(index,1);
             this.totalBudget-=item.amount;
        this.itemAdded.next(this.items);
        this.BudgetChanged.next(this.totalBudget);
      }
      getItem(index:number){
        return this.items[index];
    }
    UpdateItem(newItem:Item,olditem:Item){
          
      const index=this.items.indexOf(olditem);
      this.items[index]=newItem;
      this.itemAdded.next(this.items);

      this.totalBudget-=olditem.amount;
      this.totalBudget+=newItem.amount;
      this.BudgetChanged.next(this.totalBudget);
    }
      
}