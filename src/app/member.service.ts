import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Member } from './member';
import { MessageService } from './message.service';
import { MEMBERS } from './mock-members';

@Injectable({
  // serviceがappの中のどこで使われるかの指定
  providedIn: 'root',
})
export class MemberService {
  private membersUrl = 'api/members';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl).pipe(
      tap((members) => this.log('社員データを取得しました')),
      catchError(this.handleError<Member[]>('getMembers', [])),
    );
  }

  getMember(id: number): Observable<Member | undefined> {
    this.messageService.add(
      `MemberService: 社員データ(id=${id})を取得しました`,
    );
    return of(MEMBERS.find((member) => member.id === id));
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} 失敗: ${error.message}`);
      return of(result as T);
    };
  }
}
