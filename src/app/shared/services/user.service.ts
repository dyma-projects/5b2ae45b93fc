import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';


@Injectable()
export class UserService {
  // observable de type BehaviourSubject
  public users: BehaviorSubject<string[]> = new BehaviorSubject(null);

  // mémorisation des noms saisis (utilisateurs)
  private namesToAdd: string[] = [];

  constructor() { }

  /**
   * Add users
   * @param name string User name
   */
  public addUser(name: string) {
    if (name !== null) {
      this.namesToAdd.push(name);
      // emission du tableau de noms saisis
      this.users.next(this.namesToAdd);
    }
  }
}
