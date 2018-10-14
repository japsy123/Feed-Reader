/* feedreader.js
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url is defined and isnt empty',function(){
             for(let feed of allFeeds){
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             }
         })

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined and isnt empty',function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });


    /* A new test suite named "The menu" */

    describe("The Menu",function(){
         // A test that ensures the menu element is hidden by default.
        it("Menu is hidden",function(){
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        })

        /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("Menu toggles",function(){
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        })
    })
           
    /* Test suite named "Initial Entries" */

    describe("Initial Entries",function(){

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0,done);
        })
        it("LoadFeeds works",function(){
            const feed = document.querySelector('.feed');
            expect(feed.children.length>0).toBe(true)
        })
       
    })

    /* Test suite named "New Feed Selection" */

    describe("New Feed Selection",function(){
        // Defining feed
        var feed = document.querySelector('.feed');
        // Defining feed1, which will later store the inital content
        var feed1;
        beforeEach(function(done){
            loadFeed(0);
            // defining tempFeed for capturing initial content
            const tempFeed= feed.children[0].innerText;
            // storing tempFeed to feed1 as tempFeed score wont be valid in following spec
            feed1 = tempFeed;
            loadFeed(1,done);
            
        })
        it("Content Changes",function(){
            feed = document.querySelector('.feed');
            const feed2= feed.children[0].innerText;
            // Comparing if the intial feed content and later content are similar or not. 
            // Its enough to check with just first elements.
            expect(feed1 !== feed2).toBe(true)
        })
    })
}());
