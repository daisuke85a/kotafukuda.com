// ハンバーガーメニューの動作
$(function() {
  $("#menu").click(function() {
    console.log("menu-click");
    $(".menu-nav").toggleClass("active");
  });
  $("#menu-close").click(function() {
    console.log("menu-click");
    $(".menu-nav").toggleClass("active");
  });

});

/* instagram */
$(function () {
  try {
      this.name = "kotafukuda0111";
      $.ajax('https://www.instagram.com/' + this.name + '/', {
          timeout: 2000,
          datatype: 'html'
      }).then(function (data) {
          json_string = data.split("window._sharedData = ")[1];
          json_string = json_string.split("};</script>")[0] + "}";
          this.Arrya_data = JSON.parse(json_string);
          let datas = this.Arrya_data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
          for (i in datas) {
              url = datas[i].node.display_url;
              this.html = `
              <div class="card">
                  <img src="${url}" class="card-img-top" />
              </div>
              `;
              $(".insta-card").append(this.html);
          }
      });
  } catch (error) {
      alert(error);
  }
})