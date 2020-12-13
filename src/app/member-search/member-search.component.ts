import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css'],
})
export class MemberSearchComponent implements OnInit {
  members$?: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.memberService.searchMembers(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
