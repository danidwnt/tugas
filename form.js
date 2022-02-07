function showData(){  //perintah onclick pada botton

    //DOM
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subjack = document.getElementById("subjack").value
    let psn = document.getElementById("psn").value

    document.getElementById("nama").value = ""
    document.getElementById("email").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("subjack").value = ""
    document.getElementById("psn").value = ""


    console.log(nama)
    console.log(email)
    console.log(phone)
    console.log(subjack)
    console.log(psn)


//check kondisi
    if (nama == ""){
        return alert('nama input kosong bro tolong isi')
    }
    if (email == ""){
        alert('email input kosong bro tolong isi')
    }
    if (phone == ""){
        alert('no hp input kosong bro tolong isi')

    }if (subjack == ""){
        alert('nama input kosong bro tolong isi')
    }

    if (psn == ""){
        alert('pesan input kosong bro tolong isi')
    }

//send email

    let emailReceiver = 'danidewantara02@gmail.com'


    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subjack}&body=hello my name is,${nama} ${email} ${phone} ${psn}`

    a.click()

}