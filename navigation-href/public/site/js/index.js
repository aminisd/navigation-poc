
let urlParams = new URLSearchParams(location.search);

if(urlParams.get("p") !== null) {
  renderPage(urlParams.get("p"));
}
else {
  renderPage();
}



function renderPage  (param)  {

  console.log("Param :",param)

  console.log("History Length :" ,history.length)


  switch (param) {

    case 'component2':
      // Render component 2
      render(param, 1);
      break
    case 'component3':
      // Render component 3
      render(param, 1);
      break
    default:
      // Render default component
      render(param)
  }

}

function render  (param , def = 0) {
  if(def !== 0){
    // Render the desired component
    console.log(param);
    history.replaceState(null, null, '?p=' + param);
    $(`#${param}`).load(`../inc/${param}/${param}.html`);
  }

  else {
    // Render the default
    console.log("Default :" , param)
    $("#component1").load("../inc/component1/component1.html");
  }

}




