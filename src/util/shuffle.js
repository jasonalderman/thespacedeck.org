// Fisher-Yates shuffling algorithm, from 
// https://javascript.info/task/shuffle
const shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// from: https://stackoverflow.com/a/11972692
// var ul = document.querySelector('ul');
// for (var i = ul.children.length; i >= 0; i--) {
//     ul.appendChild(ul.children[Math.random() * i | 0]);
// }

export default shuffle;