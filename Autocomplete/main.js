document.addEventListener("DOMContentLoaded", () => {
  let inputElement = document.querySelector(".input-container");
  let dropdownElement = document.querySelector(".dropdown-content");
  let mockData = ["test", "vest1", "jest", "jest2", "vest2"];

  function debounce(func, timeout = 300) {
    let timer;
    /**
     * fucking stupid I am ! returning the function so need to call this function as well.
     */
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function showResults(val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let resultArray = mockData.filter((item) => {
          return item.includes(val);
        });
        console.log(resultArray);
        resultArray.forEach((item) => {
          let ele = document.createElement("span");
          ele.innerHTML = item;
          dropdownElement.appendChild(ele);
        });
        resolve();
      }, 500);
    });
  }

  inputElement.addEventListener("input", (event) => {
    dropdownElement.innerHTML = "";
    let val = event.target.value;
    if (val.length > 2) {
      let runProcess = debounce(() => {
        showResults(val).then(() => {
          console.log("lalit");
        });
      });
      runProcess();
    }
  });
});
