function arrayToObject(arr){
    var date = new Date()
    var data1 = date.getFullYear() - arr["1. Abdurrahman"][3]
    var data2 = date.getFullYear() - arr["2. Nabil ulfa"][3]

    var people1 = {
        firstName : arr["1. Abdurrahman"][0],
        lastName : arr["1. Abdurrahman"][1],
        gender : arr["1. Abdurrahman"][2],
        age : data1
    }

    var people2 = {
        firstName : arr["2. Nabil ulfa"][0],
        lastName : arr["2. Nabil ulfa"] [1],
        gender : arr["2. Nabil ulfa"] [2],
        age : data2
    }
    
    console.log('1. Abdurrahman : ',people1);
    console.log('\n');
    console.log('2. Nabil ulfa : ',people2);
    
}

var people = {
    "1. Abdurrahman" : [
        "Abdur",
        "rahman",
        "male",
        1995,
    ],
    "2. Nabil ulfa" : [
        "Nabil",
        "ulfa",
        "male",
        1985
    ]

    
}
arrayToObject(people);
