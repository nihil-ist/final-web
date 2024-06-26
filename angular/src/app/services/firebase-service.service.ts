import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Reservation } from '../models/reservation.model';
import { Database, ref, get, child, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = '/reservations';
  private apiUrl = 'http://localhost:3000'; 
  
  reservationsRef: AngularFireList<Reservation>;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {
    this.reservationsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Reservation> {
    return this.reservationsRef;
  }

  create(res: Reservation): any {
    return this.reservationsRef.push(res);
  }

  update(key: string, value: any): Promise<void> {
    return this.reservationsRef.update(key, value);
  }

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


  getReservationsByMonth(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reservations-by-month`);
  }
}
