import * as htmlparser from "htmlparser2";

export async function getDiary(){
    const response = await fetch('https://letterboxd.com/vignesh9123/rss/');
    const xml = await response.text()

    const dom = htmlparser.parseDocument(xml,{
        xmlMode: true
    });
    
    const rows = htmlparser.DomUtils.getElements({
        tag_name: "item",
    }, dom, true);
    const details = rows.map(row => {
        const name = htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "letterboxd:filmTitle",
        }, row, true)[0])
        const link = htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "link",
        }, row, true)[0])
        const rating = Number(htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "letterboxd:memberRating",
        }, row, true)[0]))
    
        const watchedOn = new Date(htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "letterboxd:watchedDate",
        }, row, true)[0]))
        const liked = htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "letterboxd:memberLike",
        }, row, true)[0]) == "Yes"
        const isARewatch = htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "letterboxd:rewatch",
        }, row, true)[0]) == "Yes"
        const hasReviewed = htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "guid",
        }, row, true)[0]).includes("review")
        const releaseYear = htmlparser.DomUtils.innerText(htmlparser.DomUtils.getElements({
            tag_name: "letterboxd:filmYear",
        }, row, true)[0])
        const reviewWritten = hasReviewed ? htmlparser.DomUtils.innerText(htmlparser.parseDocument(htmlparser.DomUtils.textContent(htmlparser.DomUtils.getElements({
            tag_name: "description",
        }, row, true)).trim()).children[2]) : null
        const image = htmlparser.DomUtils.getElementsByTagName("img", htmlparser.parseDocument(htmlparser.DomUtils.textContent(htmlparser.DomUtils.getElements({
            tag_name: "description",
        }, row, true))))[0].attribs.src
        return {name, link, releaseYear, rating,watchedOn , liked, isARewatch, hasReviewed, reviewWritten, image}
    })
    return details
}