import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  //모든 게시물을 가져오는 메소드
  @Get()
  getAllBoard() {
    this.boardsService.getAllBoards();
  }
}
