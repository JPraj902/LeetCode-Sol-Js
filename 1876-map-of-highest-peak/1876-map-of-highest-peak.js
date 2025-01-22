function highestPeak(isWater) {
    const m = isWater.length, n = isWater[0].length, directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const height = Array.from({ length: m }, () => Array(n).fill(-1)), queue = [];

    isWater.forEach((row, i) => row.forEach((cell, j) => {
        if (cell === 1) {
            height[i][j] = 0;
            queue.push([i, j]);
        }
    }));

    let front = 0;
    while (front < queue.length) {
        const [x, y] = queue[front++];
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return height;
}
