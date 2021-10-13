// Object Destructuring

const book = {
    title: 'Malcom X',
    author: 'Sheikh Malek',
    publisher: {
        name: 'News'
    }
}

const{ name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)

////////////////

// Array Destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , price] = item
console.log(`A medium ${coffee} costs ${price}.`)