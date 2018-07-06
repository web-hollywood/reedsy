import { ModalViewComponent } from './modal-view/modal-view.component';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BookService } from './../../services/book.service';
import { NgMaterialModule } from './../../ng-material/ng-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BookTableComponent } from './book-table.component';

describe('BookTableComponent', () => {
  let component: BookTableComponent;
  let fixture: ComponentFixture<BookTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTableComponent, ModalViewComponent ],
      imports: [NgMaterialModule, BrowserAnimationsModule],
      providers: [BookService, HttpClient, HttpClientModule, HttpHandler, MatDialog ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('View modal', () => {
  //   expect(component.viewBookDetail({})).toEqual(undefined);
  // });
});
