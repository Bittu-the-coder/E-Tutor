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

// category courses by js

console.log(courses.length);

const courseContainer = document.querySelector(".courses");
console.log(courses);

courses.forEach((course) => {
  const courseDiv = document.createElement("div");

  courseDiv.innerHTML = `
            <img
              src="${course.img}"
            />
            <div class="cat-cost mt-2 mx-3">
              <span class="cat ${course.id} p-2">${course.category}</span>
              <span class="cost fs-6">$57</span>
            </div>
            <div class="title mb-2 mx-3">${course.title}</div>
            <div class="indicator-line"></div>
            

            <div class="rating-std-number mx-3">
              <div class="rating d-flex align-content-center">
                <img class="mx-1" src="./asset/images/Vector.svg" alt="star" />
                <span>${course.rating}</span>


              </div>
              <div class="std-number d-flex align-content-center mb-0">
                <img src="./asset/images/User.svg" />
                <span class="mx-1">${course.numberOfStd}</span>
                <span class="fw-normal">students</span>
              </div>
            </div>
    `;
  courseDiv.classList.add("course-items");

  courseDiv.classList.add("course", "shadow");

  courseContainer.append(courseDiv);
});
