import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; //private 다른 컴포넌트값을 차단하기위해서 사용

  getAllBoards() {
    return this.boards;
  }
}
