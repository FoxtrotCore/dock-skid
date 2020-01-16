REQ_HOST = 'http://localhost:8080/'

function sleep(miliseconds) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

function set_title(title) {
  page_title = document.getElementById('title');
  document.title = title;
  page_title.textContent = title;
}

function set_src(blob_src, thmb_src) {
  vp = document.getElementById('vp');
  vp.setAttribute('src', blob_src);
  vp.setAttribute('poster', thmb_src);
}

function toggle_content(mode) {
  opacity = (mode ? "1" : "0");
  content = document.getElementById('content');
  content.style.opacity = opacity;
}

function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0]
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

window.onload = async function(event) {
  toggle_content(false);
  delay = 200
  console.log("Window loaded!\n\tWaiting " + delay + "ms to set video...");
  await sleep(delay);

  getJSONP(String(REQ_HOST + 1), function(data) {
    data = JSON.parse(data);
    set_title(data['title']);
    set_src(data['video'], data['thumbnail']);
  });

  toggle_content(true);
}
