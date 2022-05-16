const menu = {
  _meal: '',
  _price: 0,
  //create setter
  set meal(mealToCheck) {
    if (typeof(mealToCheck) === 'string') {
      this._meal = mealToCheck;
    } 
  },
  set price(priceToCheck) {
    if (typeof(priceToCheck) === 'number') {
      this._price = priceToCheck;
    } 
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for $${this._price}`;
    } else {
      return 'Error. Meal or price has not been entered correctly. Please check input and try again.';
    }
  }
};
//attempt reassignment of obj 
menu.meal = 'bread';
menu.price = 5;

//test reassignment
console.log(menu.todaysSpecial);
