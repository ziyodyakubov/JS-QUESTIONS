1. Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
Input: n = 3,  const obj = {a: 2, b: 3, c: 4}

Output: const res = {a: 6, b: 9, c: 12}

---------------------------------------------------------------------------------------------------------------------

2. argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

---------------------------------------------------------------------------------------------------------------------

3. Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
Input:  const books = [
{
title: “Halqa”,
author: “Akrom Malik”,
read: false
},
{
title: “Dunyoning ishlari”,
author: “O’tkir Hoshimov”,
read: true
},
{
title: “Iymon”,
author: “Shayx Muhammad Sodiq Muhammad Yusuf”,
read: true
},
]

Output: 
-- Akrom Malik ning Halqa kitobi o’qilmagan
-- O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan
-- Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Iymon kitobi o’qilgan
-- String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin


Input: [”text”, “world”, “laptop”]
Output: {”text”: 4, “world”: 4, “laptop”: 6}

---------------------------------------------------------------------------------------------------------------------


5. Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}

---------------------------------------------------------------------------------------------------------------------

6. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
Input: [
{name: 'John', age: 13},
{name: 'Mark', age: 56},
{name: 'Rachel', age: 45},
{name: 'Nate', age: 67},
{name: 'Jeniffer', age: 65}
];
Output: 54

---------------------------------------------------------------------------------------------------------------------

7. Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi **getTruthyFalsy** funksiya tuzing. (filter)
Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}

---------------------------------------------------------------------------------------------------------------------

8. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating

Input: “Men dasturlash kursida o’qiyman”
Output: {minWord: “Men”, maxWord: “dasturlash”}
---------------------------------------------------------------------------------------------------------------------

9. djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
"Najot ta'lim is the best" yozuvini hosil qiling

---------------------------------------------------------------------------------------------------------------------

10. var searchMatrix = function(matrix, target) {};

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

---------------------------------------------------------------------------------------------------------------------

11. Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

---------------------------------------------------------------------------------------------------------------------

12. sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping

---------------------------------------------------------------------------------------------------------------------

13. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
Input: {a: 2, b: 5, c: 7}
Output: ['a2', 'b5', 'c7']

---------------------------------------------------------------------------------------------------------------------

14. var findMedianSortedArrays = function(nums1, nums2) {};
nums1 = [1,2], nums2 = [3,4]
result: 2.5
arraylar qushilib va sort lanib urtasidagi son topilsin

---------------------------------------------------------------------------------------------------------------------

15. Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok etgan item larni boshqa array ga ko’chiradigan function yarating

---------------------------------------------------------------------------------------------------------------------

16. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
let products = [
{id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
{id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
{id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
{id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
];

---------------------------------------------------------------------------------------------------------------------

17. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

Input: [
{name: 'John', age: 13},
{name: 'Mark', age: 56},
{name: 'Rachel', age: 45},
{name: 'Nate', age: 67},
{name: 'Jeniffer', age: 65}
];
Output: 54