// Select the root element
const rootStyles = getComputedStyle(document.documentElement);

// Get all category elements
const categories = document.querySelectorAll(".cat");
const courseCost = document.querySelectorAll(".cost");
courseCost.forEach((cost) => {
  const costClass = cost.classList[1]; // Get the specific class for the course

  // Define the CSS variable names
  const costColorVar = `--${costClass}-500`; // Text color variable
  const bgCostColorVar = `--${costClass}-100`; // Background color variable

  // Resolve the actual colors from root styles
  const costTextColor = rootStyles.getPropertyValue(costColorVar).trim();
  const costBgColor = rootStyles.getPropertyValue(bgCostColorVar).trim();

  // Apply the resolved colors
  if (costBgColor) {
    cost.style.backgroundColor = costBgColor;
  }
  if (costTextColor) {
    cost.style.color = costTextColor; // Use resolved value, not the variable name
  }
});

categories.forEach((category) => {
  // Get the category class (e.g., 'design', 'music')
  const categoryClass = category.classList[1];
  const textCategoryClass = category.classList[2];
  const pColor = category.classList[3];

  // Construct the variable name dynamically (e.g., '--design-color')
  const bgColorVarName = `--${categoryClass}-color`;
  const colorVarName = `--${textCategoryClass}-700`;
  const pColorVarName = `--${pColor}-500`;

  // Fetch the color value from the root styles
  const backgroundColor = rootStyles.getPropertyValue(bgColorVarName).trim();
  const textColor = rootStyles.getPropertyValue(colorVarName).trim();
  const paraColor = rootStyles.getPropertyValue(pColorVarName).trim();

  // Apply the background color if it exists
  if (backgroundColor) {
    category.style.backgroundColor = backgroundColor;
  }
  if (textColor) {
    category.style.color = textColor;
  }
  if (pColor) {
    category.style.color = paraColor;
  }
});
