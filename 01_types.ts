const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number =4.2
const num: number = 3e10

const message:string = 'Hello TS'

const numberArray: number[] = [1, 1, 2, 3, 5 ,8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5 ,8, 13]

const words: string[] = ['hello', 'TS']
const words2: Array<string> = ['hello', 'TS']

// Tuple
const contact: [string,number] = [ 'Me', 1]

// Any
let variable: any = 42
// ...
variable = 'New String'
variable  = {}

// ====
function sayMyName(name: string):void {
    console.log(name)
}
sayMyName('Bubenchick')

// Never
function throwError(message: string):never {
  throw new Error(message)
}

function  infinite(): never {
    while (true) {

    }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2
const login3: Login = '2'

type ID = string | number
const id1: ID = 123
const id2: ID = '123'
// const id3: ID = true

type SomType = string | null | undefined
