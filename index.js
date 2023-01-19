// HOMEWORK#2
//the FIRST part of the homework
//Creating my own restaurant
let restaurant={
    name: 'Raw',
    buildings: 1,
    cars: null,
    latenight: undefined,
    rating: 10
}

restaurant.asianfood = true;
delete restaurant.buildings;
console.log(restaurant);

//the SECOND part of the homework
//using object
let vehicle = {
    brandName: 'BMW',
    model: 'X5'

}
// //Adding to Object
vehicle.model = 'M1'
vehicle['model'] = 'M2'
// console.log(vehicle);

// //delete from object
delete vehicle.model
console.log(vehicle);


//the THIRD part of the homework
let salaries={
    Aroo: 100,
    Dalida: 160,
    Samat: 130
}
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum); //390

