function like(img) {
    var likeCountElement = img.nextElementSibling;
    var currentCount = parseInt(likeCountElement.textContent);
    likeCountElement.textContent = currentCount + 1;

    if (img.src.includes('./like.png')) {
      img.src = './img/点赞1.png';  // 切换为已点赞的图片
    } else {
      img.src = './img/点赞2.png';  // 切换回未点赞的图片
    }
  }
  function clearInput() {
    document.getElementById('myInput').value = '';
  }
  function showMessage() {
    alert("提交成功！");
  }