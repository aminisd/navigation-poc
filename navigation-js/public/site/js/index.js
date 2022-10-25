
// Get url and make the first render.

paintContent()

function renderPage(param)  {

  switch (param) {

    case 'component2':

      // Render component 2
      $('#component2').siblings().empty();
      render(param, 1);
      break

    case 'component3':

      // Render component 3
      $('#component3').siblings().empty();
      render(param, 1);
      break

    default:

      // Render default component
      $('#component1').siblings().empty();
      render(param)
  }

}

function render  (param , def = 0) {
  if(def !== 0){

    // Render the desired component
    history.replaceState(null, null, '?p=' + param);
    $(`#${param}`).load(`../inc/${param}/${param}.html`);

  }

  else {

    // Render the default component
    $("#component1").load("../inc/component1/component1.html");

  }

}

// Navigate Function

function navigateTo(param){
  history.pushState(null,null, "?p=" + param)
  console.log(history)
  let urlParams = new URLSearchParams(location.search);

  if(urlParams.get("p") !== null) {
    renderPage(param);
  }
  else {
    renderPage();
  }
}

// Get the url param and call the renderPage

function paintContent(){
  let urlParams = new URLSearchParams(location.search);
  
  if(urlParams.get("p") !== null) {
    renderPage(urlParams.get("p"));
  }
  else {
    renderPage();
  }
}

// Render based on popstate and param

window.addEventListener('popstate', e => {  
  
  paintContent();
 
})
