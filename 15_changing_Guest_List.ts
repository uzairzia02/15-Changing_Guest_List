let guest_list: string[] = ['Uzair Ali', 'Faisal Ali', 'Nabeel Ali'];
let my_name: string = 'Uzair Zia'

for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Mr. ${guest_list[i]}, \nIts my pleaseure to invite you for the dinner.\nRegards,\n${my_name}\n\n`);

}

let absent_guest: string = 'Faisal Ali';
let new_guest: string = 'Abdul Atique';

guest_list[1] = new_guest;

for(let i=0; i<guest_list.length; i++){
    console.log('\nDear Mr.'+guest_list[i] + '\nIts my pleasure to invite you for the dinner.\nRegards,\n'+my_name);
}

console.log(`\n\nMr. ${absent_guest} is not coming to the dinner.`);