var my_country_visit_list = ['Pakitan', 'Euorpe','KSA', 'USA', 'Turkey'];

console.log(my_country_visit_list[my_country_visit_list]);


var my_country_visit_list_copied = [...my_country_visit_list];
my_country_visit_list_copied.sort();

console.log('sorted array : ',my_country_visit_list_copied);

console.log('original array : ',my_country_visit_list);

console.log('sorted array reverse order : ',my_country_visit_list_copied.reverse());

console.log('original array : ',my_country_visit_list);

console.log('reverse order of reverse sorted array : ',my_country_visit_list_copied.reverse());

console.log('stored sorted array ', my_country_visit_list_copied);

console.log('stored reverse sorted array ', my_country_visit_list_copied.reverse());