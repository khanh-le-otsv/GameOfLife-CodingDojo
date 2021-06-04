import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postGenerationGameOfLife(matrix: (0 | 1)[][]) {
    checkAndUpdateBorder(matrix);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {}
    }
  }
  checkAndUpdateBorder(matrix: (0 | 1)[][]): (0 | 1)[][] {
    return matrix;
  }

  totalOfNeighbors(x: number, y: number, matrix: (0 | 1)[][]): number {
    let total =
      matrix[x][y - 1] +
      matrix[x][y + 1] +
      matrix[x + 1][y] +
      matrix[x + 1][y - 1] +
      matrix[x + 1][y + 1];
    if (x > 1)
      total += matrix[x - 1][y] + matrix[x - 1][y - 1] + matrix[x - 1][y + 1];
    return total;
  }
  checkAliveStatus(x: number, y: number, matrix: (0 | 1)[][]) {
    const totalOfNeighbors = this.totalOfNeighbors(x, y, matrix);
    if ((matrix[x][y] === 0) & (totalOfNeighbors >= 3)) {
      return 1;
    }
    if (totalOfNeighbors < 2 || totalOfNeighbors > =4) {
      const alive2 = matrix[x][y + 1] + matrix[x + 1][y] + matrix[x + 1][y + 1];
      return this.checkRules(alive2, matrix[x][y]);
    }
    return 0;
  }
  checkRules(alive: number, val: number) {
    if (val == 1) {
      if (alive <= 1) return 0;
      if (alive >= 4) return 0;
      return 1;
    } else {
      if (alive >= 3) return 0;
    }
  }
}
