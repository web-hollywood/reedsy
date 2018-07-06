import { ModalViewComponent } from './modal-view/modal-view.component';
import { BookService } from './../../services/book.service';
import { Book } from './../../core/Book';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  displayedColumns: string[] = ['TITLE', 'PUBLISHED', 'RATING', 'BUY_ON'];
  dataSource: any;
  @ViewChild (MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BookService, public dialog: MatDialog) {

  }

  ngOnInit() {
    // calling function to store data
    this.bookService.getBooks()
    .subscribe((data: Book[]) => {

      // remove stores without link
      if (data) {
        data.forEach((ele: Book) => {
          ele.stores = ele.stores.filter((store: any) => {
            return !!store.url;
          });
        });
      }

      // adding data to data source to display in table
      this.dataSource = new MatTableDataSource<Book>(data);
      this.dataSource.paginator = this.paginator;
    });
  }


  viewBookDetail(book) {
    this.dialog.open(ModalViewComponent, {
      width: '900px',
      data: book
    });
  }

}
