import { Injectable } from '@angular/core';
import { User } from './../models/user.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
const endPointRoutes = {
  users: 'users',
  user: (id: number) => `users/${id}`,
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {}
  /**
  * Get all users
  */
  getAll(): Observable<User[]> {
    return this.apiService.get(endPointRoutes.users);
  }

  // Methode store pour ajouter un utilisateur
  store(user: User): Observable<User> {
    // Si l'id => update sinon insert
    if (user.id) {
      return this.apiService.put(endPointRoutes.user(user.id), user);
    } else {
      return this.apiService.post(endPointRoutes.users, user);
    }
  }

  delete(pk_user){
    return this.apiService.delete(endPointRoutes.user(pk_user));
  }


}
