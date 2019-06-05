function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  sayThanks('BPM');

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList();
  makeShoppingList('papaya', 'yoghurt', 'ananas');