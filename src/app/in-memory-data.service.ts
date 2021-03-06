import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: '武山 岳大' },
      { id: 12, name: '駒倉 光輝' },
      { id: 13, name: '長田 健太' },
      { id: 14, name: '高藤 百合香' },
      { id: 15, name: '浜崎 敬浩' },
      { id: 16, name: '緑川 睦' },
      { id: 17, name: '森谷 凛' },
      { id: 18, name: '大槻 弘大' },
      { id: 19, name: '岩野 宣弘' },
      { id: 20, name: '佐々木 小次郎' },
    ];

    return { members };
  }

  genId(members: Member[]): number {
    return members.length > 0
      ? Math.max(...members.map((member) => member.id)) + 1
      : 11;
  }
}
