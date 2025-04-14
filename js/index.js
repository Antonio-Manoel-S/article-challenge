const sharebtn = document.getElementById("sharebt")
const sharehid = document.getElementById("hiddenshare")

sharebtn.addEventListener("click",hidelement)

function hidelement() {
  sharehid.classList.toggle("hidden")
}