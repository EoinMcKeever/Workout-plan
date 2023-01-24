let lowerWorkout = ["squat", "leg press", "quad extensions", "hamstring extensions", "calf raises"]
let upperWorkout = []
let shortFlexibility =[]

const buttons = document.querySelectorAll('.btn');
var currentPage = document.getElementById("testimonials")
var lastPage = document.getElementById("testimonials")
var lastPageList = []

buttons.forEach(btn => {
    btn.addEventListener('click', function handleClick(event) {
        console.log(this.name);

        if(this.name === "go-back") {
            if(lastPageList.length === 0) {
                currentPage.style.display = "none";
                lastPage.style.display = "block"
                currentPage = lastPage;
            } else {
                currentPage.style.display = "none";
                currentPage = lastPageList[lastPageList.length-1]
                currentPage.style.display = "block"
                lastPageList.pop()
            }

        } else {
            var newPage = document.getElementById(this.name);
            newPage.style.display = "block"
            currentPage.style.display = "none"
            lastPageList.push(currentPage);
            currentPage = newPage;
        }
        console.log(lastPageList.length);
    }
)})

// document.querySelectorAll(".btn").addEventListener("click", function(event) {
//     alert("hell")
// })


// $('button').click(function() {
//     var id = $(this)
//     alert("hell")
// })