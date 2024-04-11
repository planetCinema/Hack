const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({
  video:true,
  audio:false
})
.then((stream)=> {

  video.srcObject = stream

})
.catch((error) => {
  document.getElementById("Error").innerHTML = "No camera detected !"
});