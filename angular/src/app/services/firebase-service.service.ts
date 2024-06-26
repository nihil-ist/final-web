import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Reservation } from '../models/reservation.model';
import { Database, ref, get, child, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = '/reservations';

  reservationsRef: AngularFireList<Reservation>;

  constructor(private db: AngularFireDatabase) {
    this.reservationsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Reservation> {
    return this.reservationsRef;
  }

  create(res: Reservation): any {
    return this.reservationsRef.push(res);
  }

  update(key: string, value: any): Promise<void> {
<<<<<<< HEAD
    return this.reservationsRef.update(key, value);
  }
=======
    return this.usersRef.update(key, value);
  } 
>>>>>>> 231404b3746961012c0af06595979741b77c929d

  delete(key: string): Promise<void> {
    return this.reservationsRef.remove(key);
  }

  getUserById(key: string): Observable<Reservation | null> {
    const itemRef = this.db.object<Reservation>(`${this.dbPath}/${key}`);
    return itemRef.valueChanges();
  }

  getreservationsByAttribute(attribute: string, value: any): Observable<Reservation[]> {
    return this.db.list<Reservation>(this.dbPath, ref => ref.orderByChild(attribute).equalTo(value))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
