document.getElementById('myButton').addEventListener('click', function() {
  redirectToAnotherPage();
});

document.getElementById('goBackButton').addEventListener('click', function() {
  // 뒤로가기 버튼을 클릭하면 이전 페이지로 이동
  window.history.back();
});


function redirectToAnotherPage() {
  var targetPageUrl = "canvas.html?returnUrl=" + encodeURIComponent(window.location.href);
  window.location.href = targetPageUrl;
}


function goBackToOriginalPage() {
  // 뒤로가기 버튼을 클릭하면 이전 페이지로 이동
  window.history.back();
}