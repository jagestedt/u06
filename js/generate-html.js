$(() => {
  let list = $('#todo');
  for (let i = 1; i < 6; i++) {
    let cards = `<li id="task-${i}" class="p-2 m-2 card card-background"><h3 class="title is-6">Item ${i}</h3> 
            <div id="tabs" class="tabs my-tabs">
              <ul>
                <li><a href="#tabs-1">First Man</a></li>
                <li><a href="#tabs-2">Second breakfast</a></li>
                <li><a href="#tabs-3">Third Man</a></li>
              </ul>
              <section id="tabs-1" class="has-background-success p-2">
                <p>1</p>
              </section>
              <section id="tabs-2" class="has-background-primary p-2">
                <p>2</p>
              </section>
              <section id="tabs-3" class="has-background-warning p-2">
                <p>3</p>
              </section>
            </div>
            <label for="datepicker-${i}">Pick a deadline:</label> 
            <input type="text" id="datepicker-${i}">
            <p>Current deadline: <input class="has-text-dark mt-4 mb-4" type="text" id="deadline-${i}" size="30"></p>
            <button id="opener-${i}" class="button btn" data-id="${i}">Details</button>
          </li>`;
    console.log(i);
    list.append(cards);
  }
});
