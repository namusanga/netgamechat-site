
//add your credentials from firebase project

const firebaseConfig = {
    apiKey: "AIzaSyCxE5b4wMqvGTaHSc7XZr9ad_6HrzE5p_A",
    authDomain: "netgamechat.firebaseapp.com",
    projectId: "netgamechat",
    storageBucket: "netgamechat.appspot.com",
    messagingSenderId: "502001533796",
    appId: "1:502001533796:web:6cfd5beb5a9c32349c7071",
    measurementId: "G-52XX4CSP2F"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
db.settings({timestampsInSnapshots: true});


//contact data
const contactForm = document.querySelector(".contact-form")
const firstname = document.querySelector(".firstname")
const lastname = document.querySelector(".lastname")
const email = document.querySelector(".email")
const projectname = document.querySelector(".projectname")
const projectdescription= document.querySelector(".projectdescription")
const submitbutton = document.querySelector(".submit-button")
const modal = document.querySelector(".modal-wrap")
const close = document.querySelector(".close")




submitbutton.addEventListener("click", (e)=>{
    e.preventDefault()
    db.collection('contact-form').doc(email.value).set({
        fullName: firstname.value,
        lastName: lastname.value,
        emal: email.value,
        projectname: projectname.value,
        projectdescription: projectdescription.value
    }).then(()=>{
        contactForm.reset()
        modal.classList.toggle('display-none')
    })
})


close.addEventListener('click', (e)=>{
    modal.classList.toggle('display-none')
})