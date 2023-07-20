// ==UserScript==
// @name         CanvasQOL
// @namespace    https://github.com/Xaephia
// @version      0.1
// @description  A series (for now just one) of small helper scripts that make the grading experience a little less tedious.
// @author       Xaephia
// @match        *://*/courses/*/gradebook/speed_grader?*
// @grant        none
// ==/UserScript==

const callback = (mutationList, observer) => {
    setTimeout(inserter, 150);
}

const observer = new MutationObserver(callback);

function inserter() {
	//Find name
    var copyTarget = document.querySelector("#combo_box_container .ui-selectmenu-item-header");
    if(!copyTarget) {
        setTimeout(inserter, 150);
        return;
    } else {
		//Clean name text
        let text = copyTarget.textContent.trim().split(" ");
		//Find comment box
        var copyDest = document.querySelector("#textarea-container textarea[placeholder]");
        if(!copyDest) {
            setTimeout(inserter, 150);
            return;
        } else {
			//Determine whether the first icon in the name box is a check
            let icon = document.querySelector("#combo_box_container i");
            if (icon.className !== "icon-check") {
				//If not, copy first name
                copyDest.value = text[0] + ",\n";
                copyDest.focus();
            }
        }
    }
    watch(document.querySelector("#combo_box_container span a span"));
};

function watch(target) {
    let settings = {childList:true, subtree:true};
    observer.observe(target, settings);
}

'use strict';
inserter();