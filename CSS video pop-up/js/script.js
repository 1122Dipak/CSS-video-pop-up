var divItems = document.getElementsByClassName("playList");

        function selected(item, text) {
          this.clear();
          item.style.backgroundColor = "#404043";
        }

        function clear() {
          for (var i = 0; i < divItems.length; i++) {
            var item = divItems[i];
            item.style.backgroundColor = "#1d1d1e";
          }
        }
