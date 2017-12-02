import { IItem } from './../item.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;
  @Output() onDelete = new EventEmitter<number>();

  closeImgUrl = 'http://icons.iconarchive.com/icons/custom-icon-design/mono-general-1/512/close-icon.png';

  constructor() { }

  ngOnInit() {
  }

  deleteItem() {
    this.onDelete.emit();
  }

}
