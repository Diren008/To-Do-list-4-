/*
This works but for some reason keeps duplicating entire list (would need to change button to p2)
$(function() {
    $('p2')(function() {
  
      var list = $('ul');
      var listitems = list.children('li').get();
      listitems.sort(function(e1, e2) {
        return $(e1).text().toUpperCase().localeCompare($(e2).text().toUpperCase());
      })
  
      $.each(listitems, function(idx, itm) {
        list.append(itm);
      });
  
    });
  });*/


// something is amiss here. Will need to come back and check
const order = [];

const orderList = (order) => {
    return order
        .sort((a, b) => {
            if (a.value > b.value) { return 1; }
            if (a.value < b.value) { return -1; }
        })
}

document.querySelector('#sortList').addEventListener('click', () => {

    const data = document.querySelector('#sorted');

    order.push(data.value);

    let mapped = sorted.map(
        (el, i) => ({ index: i, value: el.toLowerCase() })
    );

    const sortedList = doSort(mapped)
        .map(el => order[el.index]);

    completedTasks.innerHTML = sortedList.map(order => '<li>' + order + '</li>').join('');

    data.value = '';

})

// local storage

