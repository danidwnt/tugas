

const waktu1 = new Date(2022,9,15)
const waktu2 = new Date(2022,9,1)

const waktu1DalamMilidetik = waktu1.getTime()
const waktu2DalamMilidetik = waktu2.getTime()

const selisiMiliDetik = waktu1DalamMilidetik - waktu2DalamMilidetik

const selisiDetik = selisiMiliDetik/1000
const selisiMenit = selisiDetik/60
const selisiJam = selisiMenit/60
const selisiHari = selisiJam/24
const selisiBulan = selisiHari/30
const selisiTahun = selisiBulan/12


console.log(selisiMiliDetik)
//console.log(selisiBulan)
//console.log(selisiTahun)

let test =document.getElementById('test')

test.innerHTML += `<p id="test"><i class="far fa-calendar-alt fa-lg"></i>1 Sep 2022 - 15 Sep 2022</p>
                    <p style='margin-bottom:-50px'><i class="far fa-clock fa-lg"></i>${selisiHari} hari</p>`





