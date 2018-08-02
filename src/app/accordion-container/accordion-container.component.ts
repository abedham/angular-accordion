import { Component, OnInit, ContentChildren, QueryList, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { fromEvent, Subscription, Subscriber, Observable, observable, of, from } from 'rxjs';

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.css']
})
export class AccordionContainerComponent implements OnInit, AfterContentInit, OnDestroy {

  lastOpened: AccordionComponent;
  @ContentChildren(AccordionComponent) items: QueryList<AccordionComponent>;
  subscribtions: Array<any> = [];
  constructor() {
  }

  ngOnInit() {
  }

  closeItem(item: AccordionComponent) {
    if (item === this.lastOpened)
      return;
    if (this.lastOpened != null) {
      this.lastOpened.visible = false;
    }
    this.lastOpened = item;
  }
  ngAfterContentInit() {
    this.items.forEach(item => {
      let subscribe = item.closeItems.subscribe(() => {
        this.closeItem(item);
      });
      this.subscribtions.push(subscribe);
    });
  }
  ngOnDestroy() {
    this.subscribtions.forEach(element => {
      element.unsubscribe();
    });
  }
}
