 var img_arr = 
    [
      'https://previews.123rf.com/images/furkanahmet/furkanahmet1909/furkanahmet190900003/133381156-3d-amazing-natural-wallpaper.jpg' ,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtS5VKxQV8A6BvC0gdCGFSSZ4Z9PcKPwi9w&usqp=CAU',
      'https://www.pexels.com/photo/white-sports-coupe-733745/' ,
      'https://images.unsplash.com/photo-1623063921261-5a9914c19548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' ,

    ];



    var btn = document.getElementById("btn");
    btn.addEventListener("click", showImages);
 
   function showImages()
   {
 
      var gallery_container = document.getElementById("gallery_container");
    
     // when click on button it will clear all and then print. we can avoid repeated printing using this
        gallery_container.innerText=" ";
 
 
     for(var i=0; i<img_arr.length; i++)
     {
           var new_img = document.createElement("img"); 
 
           new_img.src = img_arr[i];
 
           gallery_container.appendChild(new_img);
 
          //  new_img.addEventListener("click", imageClicked)
 
     }
    
  }
  
