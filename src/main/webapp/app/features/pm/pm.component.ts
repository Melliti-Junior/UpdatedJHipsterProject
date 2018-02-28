import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-pm',
  templateUrl: './pm.component.html',
  styles: ['./pm.component.css']
})
export class PmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  allowDrop($event) {
    $event.preventDefault();
  }

 drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

 drop(ev) {
    ev.preventDefault();
    // tslint:disable-next-line:prefer-const
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
}

}
