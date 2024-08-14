/* destructuring objects
     syntax: const {propertyName} = objectNameWhichIsToBeDestructured

     also, below syntax can be used if we want to refer propertyName with some other name {in case we want to denote it with a shorter name}

     const {propertyName: newNameYouWantToUse} = objectNameWhichIsToBeDestructured
*/

// Example of object destructuring
const course = {
  courseName: "JavaScript for Me",
  courseInstructor: "Shivani Raichandani",
  price: 0.0,
};

// console.log(course.courseInstructor); // Shivani Raichandani

// const { courseInstructor } = course;
const { courseInstructor: teacher } = course;

// console.log(courseInstructor); // Shivani Raichandani
// console.log(teacher); // Shivani Raichandani
