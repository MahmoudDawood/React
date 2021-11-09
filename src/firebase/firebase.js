import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDnJ2ToQ7lY8oJp_3Oj46osEHTkC9_HP1Y",
    authDomain: "expensify-d1d60.firebaseapp.com",
    databaseURL: "https://expensify-d1d60-default-rtdb.firebaseio.com",
    projectId: "expensify-d1d60",
    storageBucket: "expensify-d1d60.appspot.com",
    messagingSenderId: "22554177404",
    appId: "1:22554177404:web:993b9339e84ebb5beffef9",
    measurementId: "G-GCX743NRQX"
}

// Initialize Firebase
firebase.initializeApp(config)

const database = firebase.database()

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val(),
//             })
//         })
//         console.log(expenses)
//     })

database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
})

// database.ref('notes/-Mo3GqVz8eI2dgNOstYG').remove()

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(val.name, ' is a ', val.job.title, ' at ', val.job.company)
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Mahmoud Dawood',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'El-Zawya',
//         country: 'Egypt'
//     },
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     }).catch((e) => {
//         console.log('Did not remove data', e)
//     })