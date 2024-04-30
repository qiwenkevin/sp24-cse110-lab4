# Answers

1. "3" is output, because the loop runs three times.
2. "150" is output, because its last update was to the last element (300) * 0.5 = 150
3. "150" is output, because its last update was to discounted price (150) rounded
4. "[ 50, 100, 150 ]" is output, because it discounted the prices by 50%
5. It will error because let defines in block and log is outside block
6. It will error, same reason as above
7. 150 is output because definition and log are in same block
8. "[ 50, 100, 150 ]" is output, because it discounted the prices by 50%
9. It will error because let defines in block and log is outside block
10. 3 is output because it is defined and logged in same block
11. "[ 50, 100, 150 ]" is output, because it discounted the prices by 50%
12. .
    1. console.log(student.name);
    2. console.log(student['Grad Year']);
    3. student.greeting();
    4. console.log(student['Favorite Teacher'].name);
    5. console.log(student.courseLoad[0]);
13. .
    1.  '32', because + defaults to string add
    2.  1, because - converts string to int
    3.  3, because null is empty
    4.  '3null', because null maps to its string
    5.  4, because true maps to 1
    6.  0, false and null both map to zero
    7.  '3undefined', because + means undef is mapped to its string
    8.  NaN, because - defaults to arithemtic, and undef is Not a number
14. .
    1.  true, string converted to int
    2.  false, lexographic comparison
    3.  true, default to int
    4.  false, no type conversion
    5.  false, true is 1
    6.  true, Boolean(2) is true since positive
15. == does loose comparison with automatic type changes, whereas === forces types to remain themselves when compared.
16. .
```
for (const car in statistics) {
    if (car[0] === 'r' || statistics[car] % 2 !== 0) {
        console.log(statistics[car]);
    }
}
```

17. [ 2, 4, 6 ], because it loops through each element in array, passing it through the doSomething function, multipling them by 2, then pushing back onto a new return array.
18. .
```
setInterval(function() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);
```

19. 1 4 3 2