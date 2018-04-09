let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// for(key in students){
//     console.log(students[key]);
// }

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

console.log("Employees:")
let count1 = 0;
for(user in users.employees){
    count1++;
    let fname = users.employees[user].first_name + users.employees[user].last_name;
    console.log(count1 + " " + users.employees[user].last_name + ", " + users.employees[user].first_name + " - " + fname.length);
}
console.log("Managers:")
let count2 = 0;
for(user in users.managers){
    count2++
    let fname = users.managers[user].first_name + users.managers[user].last_name;
    console.log(count2 + " " + users.managers[user].last_name + ", " + users.managers[user].first_name + " - " + fname.length);
}