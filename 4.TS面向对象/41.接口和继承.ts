interface IPerson {
  name: string
  age: number
  eating: () => void 
}

interface IAnimal {
  sunning: () => void 
}

interface IStudent extends IPerson,IAnimal {
  sno: number 
}

const stu: IStudent = {
  name: "fredo",
  age: 18,
  sno: 1001,
  eating: function() {
    // ...
  },
  sunning() {
    // ...
  },
  
}

export {}