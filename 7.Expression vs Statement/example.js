function tabsHandler(index, name) {
    return function tabClickEvent(evt) {
        console.log(index, name);
    };
}

var tabs = document.querySelectorAll('div');

for (i = 0; i < tabs.length; i += 1) {
    let name = tabs[i].innerHTML;
    tabs[i].onclick = tabsHandler(i, name);
}