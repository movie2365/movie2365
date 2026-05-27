const video = document.getElementById("video");
    const playPause = document.getElementById("playPause");
    const progress = document.getElementById("progress");
    const fullscreen = document.getElementById("fullscreen");
    const controls = document.getElementById("controls");
    const container = document.getElementById("videoContainer");
    const time = document.getElementById("time");

    let hideTimeout;

    // ✅ better time format (supports hours)
    const format = (t) => {
      const hrs = Math.floor(t / 3600);
      const mins = Math.floor((t % 3600) / 60);
      const secs = Math.floor(t % 60).toString().padStart(2, "0");

      if (isNaN(t)) return "0:00";

      if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, "0")}:${secs}`;
      }
      return `${mins}:${secs}`;
    };

    // ✅ load duration properly (fixes 0:00 / 0:00 bug)
    video.addEventListener("loadedmetadata", () => {
      time.textContent = `0:00 / ${format(video.duration)}`;
    });

    // PLAY / PAUSE
    playPause.addEventListener("click", () => {
      if(video.paused){
        video.play();
        playPause.textContent = "❚❚";
      } else {
        video.pause();
        playPause.textContent = "▶";
      }
    });

    // UPDATE PROGRESS
    video.addEventListener("timeupdate", () => {
      const percent =
        (video.currentTime / video.duration) * 100;

      progress.value = percent || 0;

      time.textContent =
        `${format(video.currentTime)} / ${format(video.duration)}`;
    });

    // SEEK
    progress.addEventListener("input", () => {
      video.currentTime =
        (progress.value / 100) * video.duration;
    });

    // FULLSCREEN
    fullscreen.addEventListener("click", () => {
      if(!document.fullscreenElement){
        container.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    // CONTROLS HIDE
    const showControls = () => {
      controls.classList.remove("hide");

      clearTimeout(hideTimeout);

      hideTimeout = setTimeout(() => {
        if(!video.paused){
          controls.classList.add("hide");
        }
      }, 2500);
    };

    container.addEventListener("mousemove", showControls);

    video.addEventListener("play", showControls);

    video.addEventListener("pause", () => {
      controls.classList.remove("hide");
    });
