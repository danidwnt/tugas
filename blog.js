let blogs = []


function addBlog(event) {

    event.preventDefault()

    let project = document.getElementById('input-blog-project').value
    let dateStart =document.getElementById('startdate').value
    let dateEnd =document.getElementById('enddate').value
    let description = document.getElementById('input-blog-description').value
    let image = document.getElementById('input-blog-image')
    let technologies = document.querySelectorAll('.checkbox')


    //console.log(technologies)
    //console.log(technologies1)
    //console.log(technologies2)
    //console.log(technologies3)
    


    image = URL.createObjectURL(image.files[0])

    let blog = {
        author: 'Rhoma Irama',
        project,
        dateStart,
        dateEnd,
        description,
        technologies,
        image,
        postedAt: new Date()
    }

    //console.log(technologies)

    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let lengthData = blogs.length
    // console.log(lengthData)

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()

    // looping / perulangan
    for (let i = 0; i < lengthData; i++) {

        blogContainer.innerHTML += `
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">

          <h4>
            <a href="blog-detail.html" target="_blank">${blogs[i].project}</a>
          </h4>
          <div class="detail-blog-content">
           durasi : ${getDistenceTime(blogs[i].dateStart)}
          </div>
          <p>
          ${blogs[i].description}
          </p>
          <div class="icon-card">

            <p></p>
            <a><i class="fab fa-node-js fa-2x"></i></a>
            <a><i class="fab fa-react fa-2x"></i></a>
            <a><i class="fab fa-js fa-2x"></i></a>
            <a><i class="fab fa-android fa-2x"></i></a>

          </div>
        
          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-post">delete</button>
          </div>
        </div>
      </div>
        `

      
    }
}


function getDistenceTime(time){

  let dani= document.getElementById('enddate').value
  

  //console.log(dani)

  const distance = new Date(dani) - new Date(time)

  // convert to day

  
  const selisiDetik = distance/1000
  const selisiMenit = selisiDetik/60
  const selisiJam = selisiMenit/60
  const selisiHari = selisiJam/24
  const selisiBulan = selisiHari/30
  const selisiTahun = selisiBulan/12

  //const miliseconds = 1000
  //const secondInMinute = 60
  //const minutesInHour = 60
  //const secondsInHour = secondInMinute * minutesInHour
  //const 
  //const hoursInDay = 23

  let dayDistance = selisiHari

  // dayDistance = 4.6

  if (dayDistance >= 1) {
    const time = Math.floor(dayDistance)+ ' hari'
    console.log("time " + time);
    return time
  } else {
    // Convert to hour 
    const monthDistance = Math.floor(selisiBulan)
  
    if (monthDistance > 29) {
      return monthDistance + ' month'
        
    } else {
      // convert to minute
      const minuteDistance = Math.floor(distance / (miliseconds * secondInMinute))
      return minuteDistance + 'minute ago'
    }
    
  }
}


function firstBlogContent() {
    return `
         <div class="blog-list-item">
        <div class="blog-image">
          <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">

          <h4>
            <a href="blog-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
          </h4>
          <div class="detail-blog-content">
            durasi: 3 bulan
          </div>
          <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan.
          </p>
          <div class="icon-card">
            <a><i class="fab fa-node-js fa-2x"></i></a>
            <a><i class="fab fa-react fa-2x"></i></a>
            <a><i class="fab fa-js fa-2x"></i></a>
            <a><i class="fab fa-android fa-2x"></i></a>

          </div>
        
          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-post">delete</button>
          </div>
        </div>
      </div>

      <div class="blog-list-item">
        <div class="blog-image">
          <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">

          <h4>
            <a href="blog-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
          </h4>
          <div class="detail-blog-content">
            durasi: 3 bulan
          </div>
          <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan.
          </p>
          <div class="icon-card">
            <a><i class="fab fa-node-js fa-2x"></i></a>
            <a><i class="fab fa-react fa-2x"></i></a>
            <a><i class="fab fa-js fa-2x"></i></a>
            <a><i class="fab fa-android fa-2x"></i></a>

          </div>
        
          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-post">delete</button>
          </div>
        </div>
      </div>

      <div class="blog-list-item">
        <div class="blog-image">
          <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">

          <h4>
            <a href="blog-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
          </h4>
          <div class="detail-blog-content">
            durasi: 3 bulan
          </div>
          <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan.
          </p>
          <div class="icon-card">
            <a><i class="fab fa-node-js fa-2x"></i></a>
            <a><i class="fab fa-react fa-2x"></i></a>
            <a><i class="fab fa-js fa-2x"></i></a>
            <a><i class="fab fa-android fa-2x"></i></a>

          </div>
        
          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-post">delete</button>
          </div>
        </div>
      </div>
      
      <div class="blog-list-item">
        <div class="blog-image">
          <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">

          <h4>
            <a href="blog-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
          </h4>
          <div class="detail-blog-content">
            durasi: 3 bulan
          </div>
          <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan.
          </p>
          <div class="icon-card">
            <a><i class="fab fa-node-js fa-2x"></i></a>
            <a><i class="fab fa-react fa-2x"></i></a>
            <a><i class="fab fa-js fa-2x"></i></a>
            <a><i class="fab fa-android fa-2x"></i></a>

          </div>
        
          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-post">delete</button>
          </div>
        </div>
      </div>

      <div class="blog-list-item">
        <div class="blog-image">
          <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">

          <h4>
            <a href="blog-detail.html" target="_blank">Dumbways Mobile App - 2021</a>
          </h4>
          <div class="detail-blog-content">
            durasi: 3 bulan
          </div>
          <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan.
          </p>
          <div class="icon-card">
            <a><i class="fab fa-node-js fa-2x"></i></a>
            <a><i class="fab fa-react fa-2x"></i></a>
            <a><i class="fab fa-js fa-2x"></i></a>
            <a><i class="fab fa-android fa-2x"></i></a>

          </div>
        
          <div class="btn-group">
            <button class="btn-edit">edit</button>
            <button class="btn-post">delete</button>
          </div>
        </div>
      </div>
      
    </div>  



    `
}



let valueList = document.getElementById('value-checkbox')
let listArray = []

let technologies = document.querySelectorAll('.checkbox')

    for (let checkbox of technologies) {
      checkbox.addEventListener('click',function(){
        if(this.checked == true) {
          listArray.push(this.value)
          valueList = listArray
          console.table(valueList)

        }else {
          console.log('you belum pijit')
        }
      })
      
    }
