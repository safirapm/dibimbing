let data = [
    {
        title: "The Only Guide You Need",
        score:8,
        status: "Posted"
    },
    {
        title: "The Advanced Guide To Archive",
        score:5,
        status: "Unposted"

    },
    {
        title: "In Defense of the Figurative Use of Literally.",
        score:6,
        status: "Unposted",
    },
    {
        title: "The Best Ways to Do Market Research For Your Business Plan",
        score:7,
        status: "Unposted"
    },
    {
        title: "The Only Guide You Need Part 2",
        score:8,
        status: "Unposted"
    },
]

function Jobs(array) {
    array.forEach((j) => { //forEach digunakan untuk memanggil fungsi setiap elemen dalam suatu array 
    if (j.score >= 7) { 
        j.status = "Posted";
    }
    console.log(j);
  });
} 
Jobs(data); // tanpa menggunakan console.log, pakai console.log akan menjadi 'undefined'