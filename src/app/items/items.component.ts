import { IItem } from './item.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: IItem[] = [{ "id": 1, "firstName": "Keir", "lastName": "Wadeling", "email": "kwadeling0@psu.edu", "gender": "Male", "isValid": true, "birthday": "2017-09-03 02:11:38" }, { "id": 2, "firstName": "Paton", "lastName": "Grocott", "email": "pgrocott1@ca.gov", "gender": "Male", "isValid": true, "birthday": "2017-09-10 19:57:59" }, { "id": 3, "firstName": "Luis", "lastName": "Dykas", "email": "ldykas2@reddit.com", "gender": "Male", "isValid": true, "birthday": "2017-11-03 19:16:02" }, { "id": 4, "firstName": "Lydie", "lastName": "Cleaver", "email": "lcleaver3@bing.com", "gender": "Female", "isValid": true, "birthday": "2017-03-01 01:38:50" }, { "id": 5, "firstName": "Maureen", "lastName": "Riping", "email": "mriping4@berkeley.edu", "gender": "Female", "isValid": true, "birthday": "2017-06-06 17:53:08" }, { "id": 6, "firstName": "Ula", "lastName": "Grimbaldeston", "email": "ugrimbaldeston5@wikipedia.org", "gender": "Female", "isValid": true, "birthday": "2017-06-24 13:43:08" }, { "id": 7, "firstName": "Elnar", "lastName": "Tuberfield", "email": "etuberfield6@cam.ac.uk", "gender": "Male", "isValid": false, "birthday": "2017-09-14 20:22:45" }, { "id": 8, "firstName": "Dene", "lastName": "Kleinschmidt", "email": "dkleinschmidt7@drupal.org", "gender": "Male", "isValid": true, "birthday": "2017-07-30 19:08:03" }, { "id": 9, "firstName": "Hodge", "lastName": "Blowfield", "email": "hblowfield8@blogger.com", "gender": "Male", "isValid": true, "birthday": "2017-02-06 13:46:57" }, { "id": 10, "firstName": "Aimee", "lastName": "Duesberry", "email": "aduesberry9@posterous.com", "gender": "Female", "isValid": false, "birthday": "2017-02-01 04:42:32" }];

  onDelete(index: number) {
    this.items.splice(index, 1);
  }

}
