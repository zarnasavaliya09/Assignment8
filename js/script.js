$(document).ready(function () {
    // Load JSON data
    $.getJSON("characters.json", function (data) {
      $.each(data, function (key, value) {
        $("#characters tbody").append(
          "<tr>" +
            "<td>" +
            value.firstname +
            "</td>" +
            "<td>" +
            value.lastname +
            "</td>" +
            "<td>" +
            value.age +
            "</td>" +
            "<td>" +
            value.gender +
            "</td>" +
            "<td>" +
            value.occupation +
            "</td>" +
            "<td>" +
            value.interests +
            "</td>" +
            "</tr>"
        );
      });
  
      // Filter buttons
      var numAtoM = 0;
      var numNtoZ = 0;
      $("#characters tbody tr").each(function () {
        var lastname = $(this)
          .find("td:nth-child(2)")
          .text()
          .charAt(0)
          .toUpperCase();
        if (lastname >= "A" && lastname <= "M") {
          $(this).addClass("atoM");
          numAtoM++;
        } else {
          $(this).addClass("nToZ");
          numNtoZ++;
        }
      });
      $("#btnAtoM").text("A to M (" + numAtoM + ")");
      $("#btnNtoZ").text("N to Z (" + numNtoZ + ")");
  
      // Search
      $("#search").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();
        if (searchTerm == "") {
          $("#characters tbody tr").removeClass("highlight");
        } else {
          $("#characters tbody tr").each(function () {
            var firstname = $(this).find("td:first-child").text().toLowerCase();
            if (firstname.includes(searchTerm)) {
              $(this).addClass("highlight");
            } else {
              $(this).removeClass("highlight");
            }
          });
        }
      });
  
      // Filter buttons click event
      $("#btnAtoM").on("click", function () {
        $("#characters tbody tr.nToZ").hide();
        $("#characters tbody tr.atoM").show();
      });
  
      $("#btnNtoZ").on("click", function () {
        $("#characters tbody tr.atoM").hide();
        $("#characters tbody tr.nToZ").show();
      });
    });
  });
  