import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Igifts } from 'src/app/interfaces/igifts';

@Component({
  selector: 'app-gifts-list',
  templateUrl: './gifts-list.component.html',
  styleUrls: ['./gifts-list.component.css']
})
export class GiftsListComponent implements OnInit {
  @Input() gifts: Igifts[] = [];
  @Output() onDeleteGifts = new EventEmitter<Igifts>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteGifts(gifts: Igifts){
    console.log(gifts)
    this.onDeleteGifts.emit(gifts)
  }

}
