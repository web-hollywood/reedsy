import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class BookStore<T> {
    protected broadcast: BehaviorSubject<T>;

    constructor(protected data: T) {
        this.broadcast = new BehaviorSubject(data);
    }

    get(): any {
        return this.broadcast.value;
    }

    getNotifier() {
        return this.broadcast.asObservable();
    }

    update(data: any): T {
        this.broadcast.next(data);
        return this.data;
    }
}
