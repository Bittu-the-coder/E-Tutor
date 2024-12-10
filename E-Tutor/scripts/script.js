// Select the root element
const rootStyles = getComputedStyle(document.documentElement);

// Get all category elements
const categories = document.querySelectorAll(".cat");
const courseCost = document.querySelectorAll(".cost");
console.log(courseCost);

courseCost.forEach((cost) => {
  const costClass = cost.classList[1];
  const costColor = `--${costClass}-500`;
  const costTextColor = rootStyles.getPropertyValue(costColor).trim();

  if (costTextColor) {
    cost.style.color = costColor;
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
