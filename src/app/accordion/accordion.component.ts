import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Output() closeItems = new EventEmitter<boolean>();
  @Output() visible: boolean;

  constructor() {
    this.visible = false;
  }
  toggleVisibility() {
    this.visible = !this.visible;
    this.closeItems.emit(this.visible);
  }
  ngOnInit() {
  }

}
