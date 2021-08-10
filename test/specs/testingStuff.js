const fs = require("fs");
const expectchai = require('chai').expect

describe('All Page Testing', () => {
    it("Do all redirects work", async () => {


        let redirects = []
        redirects.push('/maps')
        redirects.push('/news')
        let iterator7 = 0;
        let iterator8 = 0;

        redirects.map(async (obj) => {

            iterator7 += 1;

            console.log('In map method...');

            // await browser.getUrl()

            giveMeURLString = await browser.url(obj.Origin); //Why does this return / reloop????
            //  Also why is giveMeURLString populated with undefined

            iterator8 += 1;

            console.log('I should be able to see this...')
        })

    })

})






// Loop Entire Test (change url hyperlink each time)

    // Does Page Load
    // Does Page have console.log() errors
    // Does Page Hyperlinks all Load (not going to staging site)
    // Does Page have ssl certificate