/* tslint:disable:class-name component-class-suffix */
import { Component } from '@angular/core';

@Component({
  selector: 'key-up1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values = '';

  /*
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  */

  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up3',
  template: `
    <input type="text" #box [(ngModel)]="val.name" (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
    <p>{{val.name}}added</p>

  `
})
export class KeyUpComponent_v3 {
  val =
    {
      name: "baks",
      color: "red"
    };

  value:string =' ';
  onEnter(value: string) {

    this.value = value; }
}

//////////////////////////////////////////

@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
