import { Book } from './../core/Book';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
import { Response } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService, HttpClient, HttpClientModule, HttpHandler, MockBackend]
    });
  });

  it('should be created', async(inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  })));

  it('should fetch books', inject([BookService], (service: BookService) => {
    // let blogService: BlogService  = getTestBed().get(BlogService);
    const mockBackend = getTestBed().get(MockBackend);
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {

        expect(connection.request.url).toMatch(/\/books.json/);
        connection.mockRespond(
          new Response(
            new ResponseOptions({
              body: [{
                title: 'MyBook'
              }]
            }))
        );
      }
    );

    service.getBooks().subscribe( (expectedBook: any[]) => {
        expect(expectedBook[0].title).toBe('MyBook');
      }
    );
  }));
});
