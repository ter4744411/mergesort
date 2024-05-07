function Merge(arrayOne: number[], arrayTwo: number[]): number[] {
    const arrayThree: number[] = [];
    while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
        if (arrayOne[0] > arrayTwo[0]) {
            arrayThree.push(arrayTwo[0]);
            arrayTwo.shift();
        }
        else {
            arrayThree.push(arrayOne[0]);
            arrayOne.shift();
        }
    }
    return [...arrayThree, ...arrayOne, ...arrayTwo];
}

function mergeSort(list_of_number: number[]): number[] {
    if (list_of_number.length <= 1) {
        return list_of_number;
    }
    const middleIndex: number = Math.floor(list_of_number.length / 2);
    const arrayOne: number[] = list_of_number.slice(0, middleIndex);
    const arrayTwo: number[] = list_of_number.slice(middleIndex);

    return Merge(mergeSort(arrayOne), mergeSort(arrayTwo));
}

function collection_combine(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];
    const combined: number[] = [...collection1, ...collection2, ...collection3];
    return combined;
}

// You can adjust the parameters of collection1 collection2 and collection3 in the code from here
const collection1 : number[] = [1,2,3,4,5,6,7,8,9,10]
const collection2 : number[] = [30,29,28,27,26,25,24,23,22,21]
const collection3 : number[] = [11,12,13,14,15,16,17,18,19,20]

console.log("collection 1:",collection1);
console.log("collection 2:",collection2);
console.log("collection 3:",collection3);
console.log("// You can adjust the parameters of collection1 collection2 and collection3 in the code")


console.log(mergeSort(collection_combine(collection1,collection2,collection3)))
