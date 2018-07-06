import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BookStore } from './BookStore';
import { Observable } from 'rxjs/Observable';

import { TestBed, inject, async } from '@angular/core/testing';


describe('BookStore', () => {
  const bookStore = new BookStore(undefined);

  it('should create', () => {
    expect(bookStore).toBeTruthy();
  });

  it('get Value', () => {
    expect(bookStore.get()).toEqual(undefined);
  });

  it('get Notifier', () => {
    expect(bookStore.getNotifier()).toBeTruthy();
  });

  it('update Value', () => {
    expect(bookStore.update(undefined)).toEqual(undefined);
  });

});
