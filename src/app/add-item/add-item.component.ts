import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../item.model';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @ViewChild('f') form:NgForm;
  selected:Item
  editMode=false;
  constructor( private itemservice:ItemService) { }

  ngOnInit(): void {

    this.itemservice.itemSelected
    .subscribe((item:Item)=>{
    this.selected=item;
    this.form.setValue({
       description:this.selected.description,
       amount:this.selected.amount  
    }
    );
    this.editMode=true;
    });
  }

  onsubmit(){
    
       const value=this.form.value;
       const newItem=new Item(value.description,value.amount);
       if(!this.editMode){
        this.itemservice.addItems(newItem);
       }
       else{
         this.itemservice.UpdateItem(newItem,this.selected);
       }
        this.form.reset();
        this.editMode=false;
  }
}
