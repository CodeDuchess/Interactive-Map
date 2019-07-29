function precarica(img) {
    $(img).each(function () {
      $('<img/>) [0].src = this;
    });
  }
  precarica([
