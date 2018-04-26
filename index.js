function getFirstSelector(selector){
   return document.querySelector(selector);

}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
   let grandNodeChildren = document.querySelectorAll('#grand-node div');

      return grandNodeChildren[grandNodeChildren.length-1];
}

function increaseRankBy(n){
    let rankedList = document.querySelectorAll('.ranked-list li');
      for (let i = 0; i < rankedList.length; i++) {
       rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
        // for (let j = 0; j < rankedList.length; j++) {
        //   parseInt(rankedlist[i].innerHTML) + n
        //
        // }
      }
}
