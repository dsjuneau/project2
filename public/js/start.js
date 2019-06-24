function getQuestionId() {
  if (localStorage.getItem("qid") === null) {
    localStorage.setItem("qid", "1");
    return 1;
  } else {
    let qid = parseInt(localStorage.getItem("qid"));
    qid++;
    localStorage.setItem("qid", qid);
    return qid;
  }
}

$("#getQuestion").on("click", () => {
  let questionId = getQuestionId();
  let questionURL =
    "/api/quiz/" + localStorage.getItem("teamId") + "/" + questionId;
  if (questionId < 6) {
    $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: questionURL
    }).then(function(data) {
      if (data[0] === undefined) {
        localStorage.setItem("qid", questionId - 1);
        $("#query").html("Waiting for question...");
        $("#a").html("");
        $("#b").html("");
        $("#c").html("");
        $("#d").html("");
      } else {
        $("#query").html(data[0].query);
        $("#a").html(data[0].a);
        $("#b").html(data[0].b);
        $("#c").html(data[0].c);
        $("#d").html(data[0].d);
      }
    });
  }
});

$("p").on("click", function() {
  let choice = $(this).attr("id");
  let teamId = localStorage.getItem("teamId");
  let questionId = localStorage.getItem("qid");
  let answerURL = "/api/answer/" + teamId + "/" + questionId + "/" + choice;
  $.ajax({
    headers: {
      "Content-Type": "application/json"
    },
    type: "POST",
    url: answerURL
  }).then(function(data) {
    $("#query").html(data.answer);
    $("#a").html("");
    $("#b").html("");
    $("#c").html("");
    $("#d").html("");
  });
  // Add in the response here and update the score.
});
