import { Component } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  tabArray: any = [{
      title: 'Home',
      class: 'tabCls'
  }, {
      title: 'Tab One',
      class: 'tabCls'
  }, {
      title: 'Test',
      class: 'tabCls'
  }, {
      title: 'Details',
      class: 'tabCls'
  }]
}