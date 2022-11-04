    displayHipHura = () => {
for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("HipHura")
         } else if (i % 3 == 0) {
        console.log("Hip")
        } else if (i % 5 == 0) {
        console.log("Hura")
        } else {
            console.log(i)
        }

        }
    }

displayHipHura (15)