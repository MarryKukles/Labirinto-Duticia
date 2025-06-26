export function generateMaze(width: number, height: number): number[][] {
  // Initialize maze with walls
  const maze: number[][] = Array(height)
    .fill(null)
    .map(() => Array(width).fill(1));

  // Define the fixed path based on the image with more complexity
  const path = [
    [1, 1], [1, 2], [1, 3], [2, 3], [3, 3], [3, 4], [3, 5], 
    [4, 5], [5, 5], [5, 6], [5, 7], [6, 7], [7, 7], [7, 8], [7, 9], 
    [8, 9], [9, 9]
  ];

  // Create the main path
  path.forEach(([y, x]) => {
    maze[y][x] = 0;
  });

  // Add additional paths to create dead ends and alternative routes
  const additionalPaths = [
    [3, 1], [3, 2], [4, 2], [5, 2], [5, 3], [6, 3], [7, 3],
    [7, 4], [7, 5], [8, 5], [9, 5], [9, 6], [9, 7],
    [1, 5], [1, 6], [1, 7], [2, 7], [2, 8], [3, 8]
  ];

  additionalPaths.forEach(([y, x]) => {
    maze[y][x] = 0;
  });

  // Set start and end points
  maze[1][1] = 2; // Start
  maze[9][9] = 3; // End

  return maze;
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}