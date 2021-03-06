import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  @Input() member?: Member;

  constructor(
    private router: ActivatedRoute,
    private memberService: MemberService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.memberService
      .getMember(id)
      .subscribe((member) => (this.member = member));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.member) {
      return;
    }
    this.memberService.updateMember(this.member).subscribe(() => this.goBack());
  }
}
