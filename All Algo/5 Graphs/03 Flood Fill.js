function floodFill(image, x, y, newColor) {
    const oldColor = image[x][y];
  
    function dfsFill(x, y) {
      if (
        x < 0 ||
        x >= image.length ||
        y < 0 ||
        y >= image[0].length ||
        image[x][y] !== oldColor
      ) {
        return;
      }
      image[x][y] = newColor;
      dfsFill(x + 1, y);
      dfsFill(x - 1, y);
      dfsFill(x, y + 1);
      dfsFill(x, y - 1);
    }
  
    dfsFill(x, y);
    return image;
  }
  