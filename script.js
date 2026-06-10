const videoList = document.getElementById("videoList");
const videos = window.PORTFOLIO_VIDEOS || [];

videos.forEach(item => {
  const article = document.createElement("article");
  article.className = "video-card";

  const wrap = document.createElement("div");
  wrap.className = "video-wrap";

  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";

  const source = document.createElement("source");
  source.src = item.src;
  source.type = "video/mp4";

  video.appendChild(source);
  wrap.appendChild(video);
  article.appendChild(wrap);
  videoList.appendChild(article);
});
