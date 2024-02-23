// clicking the button
function clickButton() {
  $(".btn").addClass("pressed");
}

$(".btn").click(function () {
  clickButton();
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 250);
});

//Solving the math
$(".btn").click(function () {
  let bill = Number($(".total-bill").val());
  let tip = Number($(".tip").val());

  let percentageOfTip = Number(tip * 0.01);

  let tipAmount = bill * percentageOfTip;
  let finalBill = bill + tipAmount;

  $(".tip").text(`Tip: $ ${tipAmount}`);
  $(".money").text(`Final Bill: $ ${finalBill}`);
});
