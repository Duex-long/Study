function tree (height = 5) {
    if(!height) return ''
    const width = 2 * (height - 1) + 1
    const ary =[]
    ary.length = width
    ary.fill(' ')
    let str = ''
    const mid = Math.floor(ary.length/2)
    let left = mid  , right = mid
    for(let i = 0; i < height; i ++) {
        ary[left] = ary[right] = '*'
        left--;right++
        str += ary.join('')
        if(i === height - 1) {
            return 
        }
        str += '/n'

    }
    console.log(str)
    return str
}

function checkStr(s = 'dog Dog dog cat cat') {
    const strAry = s.split(' ').map(item => item.toLowerCase())
    let count = 0,i=0;
    for(; i < strAry.length;) {
        i++
        if(!i) return 
        if(strAry[i] === strAry[i-1]) {
            const checkNext = strAry[i+1]
            if(checkNext && checkNext === strAry[i]) continue 
            count += 1
        }
    }
    console.log(count)
    return count
}

// setTimeout(function(){
//     const p = new Promise(function(resolve,reject) {
//         console.log(1)
//         resolve()
//     })

//     p.then(() => {
//         console.log(2)
//     })

//     console.log(3)
// },1000)

// const np = new Promise(function(resolve,reject) {
//     console.log(5)
//     resolve()
// }).then(()=>{
//     setTimeout(() => {
//         console.log(6)
//     },0)
//     return 7
// }).then((n) => {
//     console.log(n)
// })

// console.log(4)


const data = [
    {
        id:1,
        name:'test1',
        parent:0,
    },
    {
        id:2,
        name:'test2',
        parent:1,
    },
    {
        id:3,
        name:'test3',
        parent:1,
    },
    {
        id:4,
        name:'test4',
        parent:2,
    },
    {
        id:5,
        name:'test5',
        parent:4,
    },
]

function sortData(list = data) {
    const cache = []
    list.forEach(item => {
        if(!cache[item.parent]) {
            cache[item.parent] = []
        }
        cache[item.parent].push(item)
    })
     list.forEach((item,idx) => {
        item.children = cache[item.id]
    })
    return list[0]
}

sortData()