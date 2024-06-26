import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Database, ref, get, child, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apartment } from '../models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService2 {
  private dbPath = '/apartments';

  apartmentsRef: AngularFireList<Apartment>;

  constructor(private db: AngularFireDatabase) {
    this.apartmentsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Apartment> {
    return this.apartmentsRef;
  }

  create(res: Apartment): any {
    return this.apartmentsRef.push(res);
  }

  update(key: string, value: any): Promise<void> {
    return this.apartmentsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.apartmentsRef.remove(key);
  }

  getUserById(key: string): Observable<Apartment | null> {
    const itemRef = this.db.object<Apartment>(`${this.dbPath}/${key}`);
    return itemRef.valueChanges();
  }

  getreservationsByAttribute(attribute: string, value: any): Observable<Apartment[]> {
    return this.db.list<Apartment>(this.dbPath, ref => ref.orderByChild(attribute).equalTo(value))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
