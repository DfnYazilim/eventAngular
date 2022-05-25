import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  // @ts-ignore
  @Input() id: number;
    @Output() fonk = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit(): void {
  }

  btnFn() {
    this.fonk.emit(true)
  }
}
