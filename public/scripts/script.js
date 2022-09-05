window.addEventListener('load', () => {
    console.log('connected');
})

setTimeout(() => {
    const picture = document.querySelector('#picture');
    picture.style.backgroundImage = "url('../images/mrx-picture-2.jpeg')"
}, Math.floor(Math.random() * 1500));



function showContent(elem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Get the instruction string

      // Resolve or reject the promise
      if (!elem) {
        reject("Instruction step does not exist!")
      }
      else {
        elem.removeAttribute("hidden");
      }

    }, Math.floor(Math.random() * 1000));
  });
}

document.querySelectorAll('.hidden').forEach(showContent);