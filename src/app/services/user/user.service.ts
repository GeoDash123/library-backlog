import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment }  from '../../environments/environment';
import IUserRecordResponse from '../../environments/environment.interface';
import IUserListResponse from '../../environments/environment.interface';
import IUser from '../../environments/environment.interface';

//Alatorre Lopez Jose Carlos

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  private apiUrl: string = `${environment.apiUrl}/collections/users/records`;

  public find(userId: string): Observable<IUserRecordResponse> {
    return this.httpClient.get<IUserRecordResponse>(`${this.apiUrl}/${userId}`);
  }

  public get(): Observable<IUserListResponse> {
    return this.httpClient.get<IUserListResponse>(`${this.apiUrl}/`);
  }

  public create(): Observable<IUserRecordResponse> {
    return this.httpClient.post<IUserRecordResponse>(`${this.apiUrl}/`, {});
  }

  public update(user: IUser & { id: string }): Observable<IUserRecordResponse> {
    return this.httpClient.put<IUserRecordResponse>(`${this.apiUrl}/${user.id}`, user);
  }

  public delete(userId: string): Observable<IUserRecordResponse> {
    return this.httpClient.delete<IUserRecordResponse>(`${this.apiUrl}/${userId}`);
  }

}