(() => {
  const starContainer = document.getElementById('star-container');
  const stars = document.querySelectorAll('svg');
  let curRating=4
  stars.forEach(function(star,idx) {
    star.id=idx;
    star.addEventListener('click', clickHandler);
    star.addEventListener('mouseenter', hoverEnterHandler);
    star.addEventListener('mouseleave', () => fillStar(curRating));

  });


  function clickHandler(){
    fillStar(this.id);
    curRating=this.id;

  }
  function hoverEnterHandler(){
    fillStar(this.id)
  }
  function hoverLeaveHandler(){
    fillStar(curRating)
  }

  function fillStar(lastStarId){
    console.log(lastStarId)
    stars.forEach(function(star,idx) {
      star.classList.remove('star-icon-filled')
      if (idx<=lastStarId){
        star.classList.add('star-icon-filled')
      }
    });
  }
  fillStar(curRating)

})();