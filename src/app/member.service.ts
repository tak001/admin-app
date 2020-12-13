import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable({
  // serviceがappの中のどこで使われるかの指定
  providedIn: 'root',
})
export class MemberService {
  constructor() {}

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }
}
