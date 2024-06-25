import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '../models/user.model';
import { Database, ref, get, child, onValue, query, orderByChild, equalTo } from '@angular/fire/database';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPath = '/reservations';

  usersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<User> {
    return this.usersRef;
  }

  create(user: User): any {
    return this.usersRef.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.usersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }

  getUserById(key: string): Observable<User | null> {
    const itemRef = this.db.object<User>(`${this.dbPath}/${key}`);
    return itemRef.valueChanges();
  }

  getUsersByAttribute(attribute: string, value: any): Observable<User[]> {
    return this.db.list<User>(this.dbPath, ref => ref.orderByChild(attribute).equalTo(value))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
