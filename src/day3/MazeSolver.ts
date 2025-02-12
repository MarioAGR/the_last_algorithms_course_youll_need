const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base Case
    // 1. Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // 2. On a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. Is the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. Is seen the previous
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 steps recurse
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let index = 0; index < dir.length; index++) {
        const [x, y] = dir[index];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let index = 0; index < maze.length; index++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
