const reels = [
  {
    isPlaying: true,
    isMuted: true,
    username: "deep_sandilya",
    likeCount: 1200,
    isLiked: false,
    commentCount: 150,
    caption: "Enjoying the weekend vibes! 🌅",
    video: "reels/reel1.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 80,
    isFollowed: true,
    isComment: false,
    isShare: true,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "tech_guru",
    likeCount: 5400,
    isLiked: true,
    commentCount: 320,
    caption: "New JavaScript trick you should know! 💡",
    video: "reels/reel2.mp4",
    userProfile: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    shareCount: 210,
    isFollowed: false,
    isComment: true,
    isShare: false,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "fitness_freak",
    likeCount: 2300,
    isLiked: false,
    commentCount: 110,
    caption: "5 min full-body workout 🔥",
    video: "reels/reel3.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 95,
    isFollowed: true,
    isComment: false,
    isShare: true,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "foodie_world",
    likeCount: 7600,
    isLiked: true,
    commentCount: 640,
    caption: "Making cheesy garlic bread 🧀🍞",
    video: "reels/reel4.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 410,
    isFollowed: false,
    isComment: true,
    isShare: true,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "travel_blogger",
    likeCount: 4200,
    isLiked: false,
    commentCount: 290,
    caption: "Exploring Manali ❄️",
    video: "reels/reel5.mp4",
    userProfile: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
    shareCount: 190,
    isFollowed: true,
    isComment: false,
    isShare: false,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "gaming_king",
    likeCount: 9100,
    isLiked: true,
    commentCount: 780,
    caption: "New GTA VI leaks! 👀",
    video: "reels/reel6.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 500,
    isFollowed: false,
    isComment: true,
    isShare: false,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "style_icon",
    likeCount: 3200,
    isLiked: false,
    commentCount: 250,
    caption: "Outfit of the day ✨",
    video: "reels/reel7.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 140,
    isFollowed: true,
    isComment: false,
    isShare: true,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "coding_with_me",
    likeCount: 5800,
    isLiked: true,
    commentCount: 390,
    caption: "React.js useEffect explained 📘",
    video: "reels/reel8.mp4",
    userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 260,
    isFollowed: true,
    isComment: true,
    isShare: true,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "pet_lovers",
    likeCount: 8700,
    isLiked: false,
    commentCount: 530,
    caption: "Cute puppy compilation 🐶❤️",
    video: "reels/reel9.mp4",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 370,
    isFollowed: false,
    isComment: false,
    isShare: true,
  },
  {
    isPlaying: true,
    isMuted: true,
    username: "art_creations",
    likeCount: 4600,
    isLiked: true,
    commentCount: 310,
    caption: "Spray paint art tutorial 🎨",
    video: "reels/reel10.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 225,
    isFollowed: true,
    isComment: true,
    isShare: false,
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var sum = "";
  reels.forEach(function (elem, idx) {
    sum += `
    <div class="reel">
      <video ${elem.isPlaying ? "autoplay" : ""} loop ${
      elem.isMuted ? "muted" : ""
    } src="${elem.video}"></video>
      <div class="playPause" id="${idx}">
      ${
        elem.isPlaying
          ? '<i class="ri-pause-circle-fill"></i>'
          : '<i class="ri-play-circle-fill"></i>'
      }
       </div>

      <div class="mute" id=${idx}>
      ${
        elem.isMuted
          ? '<i class="ri-volume-mute-line"></i>'
          : '<i class="ri-volume-up-line"></i>'
      }
        </div>
      <div class="bottom">
        <div class="user">
          <img src="${elem.userProfile}" />
          <h4>${elem.username}</h4>
          <button id=${idx} class="follow">${
      elem.isFollowed ? "Unfollw" : "Follow"
    }</button>
        </div>
        <h3>${elem.caption}</h3>
      </div>
      <div class="right"> 
        <div id=${idx} class="like">
          <h4 class="like-icon icon">${
            elem.isLiked
              ? '<i class="ri-heart-3-fill love"></i>'
              : '<i class="ri-heart-3-line"></i>'
          }</h4>
          <h6>${elem.likeCount}</h6>
        </div>
        <div id=${idx} class="comment">
          <h4 class="comment-icon icon">${
            elem.isComment
              ? '<i class="ri-chat-3-fill"></i>'
              : '<i class="ri-chat-3-line"></i>'
          }</h4>
          <h6>${elem.commentCount}</h6>
        </div>
        <div id=${idx} class="share">
          <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
          <h6>${elem.shareCount}</h6>
        </div>
        <div class="menu">
          <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
        </div>
      </div>
    </div>
  `;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }

    addData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }

    addData();
  }

  if (dets.target.className == "comment") {
    if (!reels[dets.target.id].isComment) {
      reels[dets.target.id].commentCount++;
    } else {
      reels[dets.target.id].commentCount--;
    }

    addData();
  }

  if (dets.target.className == "share") {
    if (!reels[dets.target.id].isShare) {
      reels[dets.target.id].shareCount++;
      // reels[dets.target.id].isShare = true;
    } else {
      reels[dets.target.id].shareCount--;
      // reels[dets.target.id].isShare = false;
    }

    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }

    addData();
  }

  if (dets.target.className == "playPause") {
    let index = dets.target.id;
    let video = document.querySelectorAll(".reel video")[index];

    if (video.paused) {
      video.play();
      reels[index].isPlaying = true;
    } else {
      video.pause();
      reels[index].isPlaying = false;
    }

    addData();
  }
});
