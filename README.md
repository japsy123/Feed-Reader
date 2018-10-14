# Project Overview

A project to test a Feed Reader application. Number of test are conducted in isolation to make sure that content are rendered correctly.

# Tests Done

1. Making sure that each feed in an allFeeds object has URL defined and its not empty.
2. Making sure that each feed in an allFeeds object has Name defined and its not empty.
3. Making sure that Test the menu element is hidden by default.
4. Making sure that menu changes visibility when the its icon is clicked. 
5. Adding to 4th test above, there is test that make sures toggling of menu works prorpely.
6. Making sure that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. Making sure that when a new feed is loaded by the loadFeed function that the content actually changes.

# How to run ?

Once the project is downloaded. Open the index.html file. The test results are listed at the botton of the page. Open feedreader.js file located under spec directory, sub directory of jasmine folder.
