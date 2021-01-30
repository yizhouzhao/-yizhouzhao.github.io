const g_basic_icon_num = [60,7,21,63,34,52,58,8,15,32,7,7,44,
    42,54,11,7,25,45,35,41,39,25,8,8,11];

const g_basic_list = {
    "A" : ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A14A", "A15", "A16", "A17", "A17A", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26", "A27", "A28", "A29", "A30", "A31", "A32", "A33", "A34", "A35", "A36", "A37", "A38", "A39", "A40", "A41", "A42", "A43", "A44", "A45", "A46", "A47", "A48", "A49", "A50", "A51", "A52", "A53", "A54", "A55", "A56", "A57", "A59"],
    "B" : ["B1","B2","B3","B4","B5","B6","B7","B1","B2","B3","B4","B5","B6","B7"],
    "C" : ["C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C14","C17","C18","C19","C20","C21"],
    "D" :["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14","D15","D16","D17","D18","D19","D20","D21","D22","D23","D24","D25","D26","D27","D27A","D28","D29","D30","D31","D32","D33","D34","D34A","D35","D36","D37","D38","D39","D40","D41","D42","D43","D44","D45","D46","D46A","D47","D48","D49","D50","D51","D52","D53","D54","D55","D56","D57","D58","D59","D60","D61","D62","D63","D280A"],
    "E":["E1","E2","E3","E4","E5","E6","E7","E8","E8A","E9","E10","E11","E12","E13","E14","E15","E16","E17","E18","E19","E20","E21","E22","E23","E24","E25","E26","E27","E28","E29","E30","E31","E32","E33","E34"],
    "F":["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","F25","F26","F27","F28","F29","F30","F31","F32","F33","F34","F35","F36","F37","F38","F39","F40","F41","F42","F43","F44","F45","F46","F47","F48","F49","F50","F51","F52"],
    "G":["G1","G2","G3","G4","G5","G6","G7","G8","G9","G10","G11","G12","G13","G14","G15","G16","G17","G18","G19","G20","G21","G22","G23","G24","G25","G26","G27","G28","G29","G30","G31","G32","G33","G34","G35","G36","G37","G38","G39","G40","G41","G42","G43","G44","G45","G46","G47","G48","G49","G50","G51","G52","G53","G54","G56","G57","G58"],
    "H":["H1","H2","H3","H4","H5","H6","H6A","H7","H8"],
    "I":["I1","I2","I3","I4","I5","I5A","I6","I7","I8","I9","I10","I11","I12","I13","I14","I15"],
    "J":["J1","J2","J3","J4","J5","J6","J7","J8","J9","J10","J11","J12","J13","J14","J15","J16","J17","J18","J19","J20","J21","J22","J23","J24","J25","J26","J27","J27A","J28","J29","J30","J31","J32"],
    "K":["K1","K2","K3","K4","K5","K6","K7"],
    "L":["L1","L2","L3","L4","L5","L6","L7"],
    "M":["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12","M13","M14","M15","M16","M17","M18","M19","M20","M21","M22","M23","M24","M25","M26","M27","M28","M29","M30","M31","M32","M33","M34","M35","M36","M37","M38","M39","M40","M41","M42","M43","M44"],
    "N":["N1","N2","N3","N4","N5","N6","N7","N8","N9","N10","N11","N11A","N12","N13","N14","N15","N16","N17","N18","N19","N20","N21","N21A","N22","N23","N24","N25","N26","N27","N28","N29","N30","N31","N32","N33","N34","N35","N35A","N36","N37","N38","N39","N40","N41","N42"],
    "O":["O1","O2","O3","O4","O5","O6","O7","O8","O9","O10","O11","O12","O13","O14","O15","O16","O17","O18","O19","O20","O21","O22","O23","O24","O25","O26","O27","O28","O29","O29V","O30","O31","O32","O33","O34","O35","O36","O37","O38","O39","O40","O41","O42","O43","O44","O45","O46","O47","O48","O49","O50","O51","O53","O54"],
    "P":["P1","P1A","P2","P3","P3A","P4","P5","P6","P7","P8","P9","P10","P11"],
    "Q":["Q1","Q2","Q3","Q4","Q5","Q6","Q7"],
    "R":["R1","R2","R3","R4","R5","R6","R7","R8","R9","R10","R11","R12","R13","R14","R15","R16","R17","R18","R19","R20","R21","R22","R23","R24","R25"],
    "S":["S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13","S14","S14A","S15","S16","S17","S17A","S18","S19","S20","S21","S22","S23","S24","S25","S26","S27","S28","S29","S30","S31","S32","S33","S34","S35","S36","S37","S38","S39","S40","S41","S42","S43","S44","S45"],
    "T":["T1","T2","T3","T4","T5","T6","T7","T7A","T8","T8A","T9","T9A","T10","T11","T12","T13","T14","T15","T16","T17","T18","T19","T20","T21","T22","T23","T24","T25","T26","T27","T28","T29","T30","T31","T32","T33","T34","T35"],
    "U":["U1","U2","U3","U4","U5","U6","U7","U8","U9","U10","U11","U12","U13","U14","U15","U16","U17","U18","U19","U20","U21","U22","U23","U24","U25","U26","U27","U28","U29","U30","U31","U32","U33","U34","U35","U36","U37","U38","U39","U40","U41"],
    "V":["V1","V2","V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13","V14","V15","V16","V17","V18","V19","V20","V21","V22","V23","V24","V25","V26","V27","V28","V29","V30","V31","V31A","V32","V33","V34","V35","V36","V37","V38","V39"],
    "W":["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W10A","W11","W12","W13","W14","W15","W16","W17","W18","W19","W20","W21","W22","W23","W24","W25"],
    "X":["X1","X2","X3","X4","X5","X6","X7","X8"],
    "Y":["Y1","Y1v","Y2","Y3","Y4","Y5","Y6","Y7","Y8"],
    "Z":["Z1","Z2","Z3","Z4","Z5","Z6","Z7","Z8","Z9","Z10","Z11"]
};

const g_classification = {
    "A" : "Men",
    "B" : "Women",
    "C" : "Gods",
    "D" : "Parts of Men",
    "E" : "Mammals",
    "F" : "Parts of Mammals",
    "G" : "Birds",
    "H" : "Parts of Birds",
    "I" : "Reptiles",
    "J" : "Unclassified",
    "K" : "Fish",
    "L" : "Insects",
    "M" : "Plants",
    "N" : "Sky",
    "O" : "Buildings",
    "P" : "Boats",
    "Q" : "Furniture",
    "R" : "Temple Furniture and Emblems",
    "S" : "Clothing",
    "T" : "Warfare and Hunting",
    "U" : " Agriculture and Crafts",
    "V" : "Rope, Baskets, and Cloth",
    "W" : "Stone and Ceramic Vessels",
    "X" : "Bread",
    "Y" : "Writing, Games, Music",
    "Z" : "Strokes and Figures"
};

function LoadIcons() {
    let word_ul = document.getElementById("word-ul");
    let word_content = document.getElementById("myTabContent");

    console.log(word_ul);

    for(let i = 0; i < 26; i++) {
        // language=HTML
        let letter = String.fromCharCode(65 + i);
        const lst_i = `<li>       
                           <a id="tab0" href="#tabBody${i.toString()}" role="tab" aria-controls="tabBody${i.toString()}    
                            " aria-selected="true" data-toggle="tab" tabindex="0">
                            ${letter}   
                            </a>       
                        </li>`;

        $(word_ul).append(lst_i);

        let icon_div_i;
        if (i === 0) icon_div_i = $(`<div class="tab-pane  fade active in col-md-12" id="tabBody0" role="tabpanel" aria-labelledby="tab0" aria-hidden="false" tabindex="0"></div>`);

        else icon_div_i = $(`<div class="tab-pane fade col-md-12" id="tabBody${i.toString()}" role="tabpanel" aria-labelledby="tab${i.toString()}" aria-hidden="true" tabindex="0"></div>`);

        const color = [((i+1) * 100 % 256).toString(),(i * 200 % 256).toString(),(i * 300 % 256).toString()];
        // language=HTML
        let icon_class_i = $(`<div class="col-md-2" style="text-align: center"><button id="any-${letter}" class="btn big-icon-btn"
                            style="background-color: rgba(${color[0]},${color[1]},${color[2]},0.4)"
                            ><img src="data/Extended/Left/${letter}/${letter}1.gif">Any ${letter}</button><div class="row"><strong>${g_classification[letter]}</strong></div></div>`);

        icon_class_i.first().click(function() {
            $('#search-form-text-2').val($('#search-form-text-2').val() + letter + " ");
        });


        icon_div_i.append(icon_class_i);
        let icon_list_i = $(`<div class="col-md-10"></div>`);

        for(let j = 0; j < g_basic_list[letter].length; j++){
            let icon_btn_i_j = $(`<button class="btn mini-icon-btn" data-id="${g_basic_list[letter][j]}"
                                style="background-color: rgba(${color[0]},${color[1]},${color[2]},0.25)"
                                ><img class="mini-icon" src="data/Extended/Left/${letter}/${g_basic_list[letter][j]}.gif"
                                >${g_basic_list[letter][j]}</button>`);

            icon_btn_i_j.click(function () {
                $('#search-form-text-2').val($('#search-form-text-2').val() + g_basic_list[letter][j] + " ");
            });
            icon_list_i.append(icon_btn_i_j);
        }

        let other_icon_i = $(`<button class="btn mini-other-icon" data-id="${letter}"
                    style="background-color: rgba(${color[0]},${color[1]},${color[2]},0.25)"
                    >...any..other...</button>`);

        other_icon_i.click(function() {
            $('#search-form-text-2').val($('#search-form-text-2').val() + letter + " ");
        });

        icon_list_i.append(other_icon_i);
        icon_div_i.append(icon_list_i);

        $(word_content).append(icon_div_i);
    }
    console.log(word_content);
}
