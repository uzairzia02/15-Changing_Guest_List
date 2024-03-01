"use strict";
let guest_list = ['Uzair Ali', 'Faisal Ali', 'Nabeel Ali'];
let my_name = 'Uzair Zia';
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Mr. ${guest_list[i]}, \nIts my pleaseure to invite you for the dinner.\nRegards,\n${my_name}\n\n`);
}
let absent_guest = 'Faisal Ali';
let new_guest = 'Abdul Atique';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('\nDear Mr.' + guest_list[i] + '\nIts my pleasure to invite you for the dinner.\nRegards,\n' + my_name);
}
console.log(`\n\nMr. ${absent_guest} is not coming to the dinner.`);
