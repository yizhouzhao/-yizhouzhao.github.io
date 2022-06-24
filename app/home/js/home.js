var tag2color = {
    "blog": "#142857",
    "paper": "#285714",
}

function init() {
    var article_container = $('#leafContainer');

    article_container.empty();
    
    for (var i = 0; i < notices.length; i++) {
        //make a leaf notice
        notice = notices[i]
        leaf_piece = make_leaf(notice["title"], notice["image_path"], notice["description"], notice["date"], notice["basic_link"], notice["aux_desc"],  notice["aux_link"], notice["category"])
        article_container.append(leaf_piece)
    }
}

function make_leaf(title, image_path, description, date, basic_link, aux_desc, aux_link, category="blog",is_new = false){
    /*
    //make leaf as article block
    ::params:
        title: title text
        image_path: path of the teaser image
        description: description of the text
        date: date of the blog

        basic_link: link one
        aux_desc: outside description
        aux_link: outside link

        is_new: is the newest blog? add new tag
    */
    var leaf = $(`
        <article class="col-12 col-md-6 tm-post">
            <hr class="tm-hr-primary">
            <a href="post.html" class="effect-lily tm-post-link tm-pt-60">
                <div class="tm-post-link-inner">
                    <img src="${image_path}" alt="Image" class="img-fluid">                            
                </div>
                <div class="new-tag"></div>
                <h2 class="tm-pt-30 tm-color-primary tm-post-title">${title}</h2>
            </a>                    
            <p>
                ${description}
            </p>
            <div class="d-flex justify-content-between">
                <span class="tm-color-primary"><a href = "${aux_link}">${aux_desc}</a></span>
                <span class="tm-color-primary">${date}</span>
            </div>
        </article>`
    );

    // make aux tag
    tag = $(`<span class="position-absolute tm-new-badge">${category}</span>`)
    tag.css("background-color", tag2color[category])
    leaf.find('.new-tag').append(tag)
    

    return leaf
}
