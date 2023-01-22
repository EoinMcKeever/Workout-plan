let lowerWorkout = ["squat", "leg press", "quad extensions", "hamstring extensions", "calf raises"]
let upperWorkout = []
let shortFlexibility =[]

const buttons = document.querySelectorAll('.btn');
var currentPage = document.getElementById("testimonials")

buttons.forEach(btn => {
    btn.addEventListener('click', function handleClick(event) {

        var newPage = document.getElementById(this.name);
        newPage.style.display = "block"
        currentPage.style.display = "none"
        currentPage = newPage
    
    }
)})

// document.querySelectorAll(".btn").addEventListener("click", function(event) {
//     alert("hell")
// })


// $('button').click(function() {
//     var id = $(this)
//     alert("hell")
// })