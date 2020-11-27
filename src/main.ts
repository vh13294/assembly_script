import 'wasi'
import { Console } from 'as-wasi'

Console.log('Hello World!')

function foo(a: i32 = 0): i32 {
    var b = a + 1
    Console.log(b.toString())
    return b
}

function computeSum(arr: i32[]): i32 {
    var sum = 0
    for (let i = 0, k = arr.length; i < k; i++) {
        sum += arr[i]
        Console.log(sum.toString())
    }
    return sum
}

function printStrArr(arr: string[]): void {
    for (let i = 0, k = arr.length; i < k; i++) {
        Console.log(arr[i])
    }
}

foo(3)
computeSum([1,2,3,4,5])
printStrArr(['abc1', 'abc2'])