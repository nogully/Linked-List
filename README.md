#Linked List

##Specification

With a little jQuery under your belt, it’s time to try your hand at building a small application.

In its simplest form, the application should have the following:

1. ~~Two input fields~~
2. ~~One for the title of the bookmark~~
3. ~~One for the URL that the bookmark should link to~~
4. ~~One button for creating the bookmark and adding it to the page~~
5. ~~A section for all of the created bookmarks; each bookmark should display:~~
..*~~The title of the bookmark~~
..*~~The URL of the bookmark (this should be clickable and link to the URL)~~
..*~~A button to “Mark as Read”~~
..*~~A button to “Remove” the bookmark~~

##Phase One

1. ~~The user should be able to input a title and URL into the appropriate fields~~
2. ~~When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section~~
3. When the user clicks on the “Mark as Read” button:
..*A class of .read should be added to the bookmark
..*If it already has the class of .read, it should be removed
4. When the user clicks on the “Remove” button, the link should be removed from the page

##Phase Two

1. If the user omits the title or the URL, the application should not create the link and should instead display an error.
2. The application should be responsive and work equally well on desktop and mobile.

##Phase Three

1. The button for creating links should be disabled if there are no contents in the title or URL fields.
2. The application should be able to keep count of the total number of links currently on the page.
3. The application should be able to keep count of the total number of read and unread links currently on the page.

##Phase Four: The Project Strikes Back

1. Add a “Clear Read Bookmarks” button which clears all the read bookmarks when clicked.
2. The user should not to be able to add a URL that isn’t valid.
