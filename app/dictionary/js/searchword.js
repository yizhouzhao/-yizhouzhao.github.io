

/**
 * @return {number}
 */
function SearchWord(mode){
    //Function to search words in the dictionary (word.js)

    let value;
    let regex_value;
    if(mode === 1)
        value = document.getElementById("search-form-text").value;
    else { // mode===2
        value = document.getElementById("search-form-text-2").value;
        regex_value = MatchSearch(value);
        console.log(regex_value);
    }
    if (value === ""){
        alert("please type something....");
        return 1;
    }

    var table_body = document.getElementById("search-result-table");
    $(table_body).empty(); //clear table body

    var found_word_num = 0;
    var i = 0;
    for(; i < word_num; i++){
        if (mode === 1 && wordlist[i].pronunciation.indexOf(value) === -1) continue;
        else if(mode === 2 && wordlist[i].characters.match(regex_value) == null) continue;

        //Star Part
        found_word_num++;
        if (found_word_num > 1000) break; //to many words to show

        var word = wordlist[i];

        var table_row = document.createElement("tr");
        var star_column = "<td width=\"3%\">" +
            "                   <span class=\"star\">" +
            "                       <i class=\"glyphicon glyphicon-star\"></i>" +
            "                   </span>" +
            "               </td>";
        $(table_row).append(star_column);


        //Image Part
        var word_image_list = word.images.split(" - ");
        var image_column = document.createElement("td");
        var image_div = document.createElement("div");
        $(image_div).attr("class", "picture scrollable");

        //console.log(found_word_num,word_image_list);

        for (var j = 0; j < word_image_list.length; j++) {
            var note = word_image_list[j];
            var pic_match = note.match(img_location_regex);
            var left_match = note.match(img_position_left);
            var top_match = note.match(img_position_top);

            //console.log(note,pic_match,left_match,top_match);
            var pic_name = pic_match[0].slice(0, -2);
            var folder_character = pic_name.slice(0, 1);
            var left_location = left_match[0].slice(2, -1);
            var top_location = top_match[0].slice(2, -1);

            var note_image = document.createElement("img");
            //$(note_image).attr("href","https://github.com/yizhouzhao/yizhouzhao.github.io/edit/master/");
            //$(note_image).attr("src", "data/Extended/Left/" + folder_character + "/" + pic_name + ".GIF");
            $(note_image).attr("src", "data/Extended/Left/" + folder_character + "/" + pic_name + ".gif");
            $(note_image).css({
                'position': 'absolute',
                'left': (left_location * 0.05).toString(),
                'top': (top_location * 0.05).toString(),
                'height': 'auto',
                'width': 'auto'
            });
            $(note_image).appendTo(image_div);
        }
        console.log(image_div);
        image_column.appendChild(image_div);
        table_row.appendChild(image_column);

        //Pronunciation Part
        var pronunciation_column =
            "                       <td width=\"12%\">\n" +
            "                            <div class=\"scrollable\">\n" +
            "                                <div>\n" +
            "                                    <p class=\"translation\" style=\"font-family: 'Lucida Sans Typewriter'\">" +
                                                    word.pronunciation +
            "                                    </p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </td>";
        $(table_row).append(pronunciation_column);

        //Translation Part
        var translation_column =
            "                        <td width=\"18%\">\n" +
            "                            <div class=\"scrollable\">\n" +
            "                                <p class=\"translation\" style=\"font-family: 'Times New Roman'\">" +
                                                word.translation +
            "                                </p>\n" +
            "                            </div>\n" +
            "                        </td>";
        $(table_row).append(translation_column);

        //Spelling Part
        var character_column =
            "                        <td width=\"32%\">\n" +
            "                            <div class=\"scrollable\">\n" +
            "                                <p>" +
                                                word.characters +
            "                                </p>\n" +
            "                            </div>\n" +
            "                        </td>";
        $(table_row).append(character_column);
        table_body.appendChild(table_row);
    }

    //If cannot find such word in the dictionary
    if (found_word_num === 0) {
        alert("Sorry, cannot find " + value + " in the dictionary!");
        return 1;
    }
    return 0;
}


function MatchSearch(pattern){
    const characters = pattern.trim().split(" ");
    let regex_need = ".*";
    regex_need += characters[0];

    if(characters[0].length === 1)
        regex_need += "\\d+[A-Z]*";

    for(let i = 1; i < characters.length; i++){
        regex_need += "\\s-\\s" + characters[i];
        if(characters[i].length === 1)
            regex_need += "\\d+[A-Z]*";
    }
    return regex_need + "($|\\s-\\s.*)";
}