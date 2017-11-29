import { IItem } from './../item.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;
  @Input() index: number;
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    this.onDelete.emit(this.index);
  }

}
