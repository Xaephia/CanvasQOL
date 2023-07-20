# CanvasQOL
A tampermonkey script to aid in some of the repetitive grading tasks one might face in canvas. Currently speedgrader-exclusive, but scope may expand in the future.

## Installation
First, install Tampermonkey to your browser from <a href="https://www.tampermonkey.net/">this page</a>.

After that's done, follow <a href="https://github.com/Xaephia/CanvasQOL/raw/main/CanvasQOL.user.js">this link</a>, which should open a Tampermonkey page. Click install.

The script should automatically update, but if not, feel free to post an issue or just poke me directly.

## Features:
<b>Name Copier</b> - takes the first name of the student, copies it to the comments box, and places your cursor so you can begin typing. Only runs on non-graded assignments, so graded works can be viewed without having to delete the comment every time.


## How do I stop this thing!?
If you click the Tampermonkey icon up in the top right of your browser, by the other extensions, it will open a menu - either switch the script off directly (if you're currently in speedgrader) or click dashboard, and switch it off there.

## Is this safe?
Probably. The worst thing that it has the ability to do is eat your typed comment, and even that shouldn't happen (anymore). The script only operates on speedgrader pages, and will not be loaded by Tampermonkey otherwise, so I promise I'm not harvesting your data. I don't even know how to do that if I wanted to.
