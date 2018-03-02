var rootNode = document.getElementById("root");
var doc = document,
div = doc.createElement('div');
div.setAttribute("class", "container");

function page(){

    var header = doc.createElement('header');
    div.appendChild(header);
    header.innerHTML = '<h1 class = "headT">Most popular tanks</h1>';

    var divTanks = doc.createElement('div');
    divTanks.setAttribute('class', 'divTanks');

    tanks.forEach(function (elem) {

        //div For Each Tank
        var divForEachTank = doc.createElement('div');
        divForEachTank.setAttribute('class', "divForEachTank");
        //Tanks Images div
        var tanksImage = doc.createElement('img');
        tanksImage.setAttribute('class', "tanksImage");
        //Country Flag div
        var countryFlag = doc.createElement('img');
        countryFlag.setAttribute('class', 'countryFlag');

        divForEachTank.appendChild(tanksImage);
        divForEachTank.appendChild(countryFlag);
        //src Images
        countryFlag.src = 'images/countries/' + elem.country + '.png';
        tanksImage.src = elem.preview;

        countryFlag.title = '' + elem.country;
        //Tank model name
        var level = doc.createElement('span');
        level.innerHTML = elem.level;
        level.setAttribute('class', 'level');

        var model = doc.createElement('h4');
        model.setAttribute('class', 'tank-model');
        model.innerHTML = elem.model;
        level.appendChild(model);
        divForEachTank.appendChild(level);
        divTanks.appendChild(divForEachTank);
        //Hash
        divForEachTank.addEventListener('click', () => {
            location.hash = elem.model;
           });
});

div.appendChild(divTanks);

    return div;
}

function tankDetails(elemTank) {
    const details = elemTank.details;
    return ` <div class="detailsT">
            <div class="left">
              <h1>
                <img class="flag" src="images/countries/${elemTank.country}.png" title="${elemTank.country}"/>${elemTank.model} (level ${elemTank.level})
              </h1>
               <span class="preview">Preview</span>
               <img class="tank-flag" src="${elemTank.preview}">
               <span class="backList">Back to list view</span>
               </div>
               
               <div class="right">
               <h1 class="preTable">Characteristic</h1>
               <table>
                <tr>
                    <th>
                        damage
                    </th>
                    <th>
                        ${details.damage}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        breoning
                    </th>
                    <th>
                        ${details.breoning}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        attack speed
                    </th>
                    <th>
                        ${details.attack_speed}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        time of targeting
                    </th>
                    <th>
                        ${details.time_of_targeting}
                    </th>
                </tr>
                
                  <tr>
                    <th>
                        ammunition
                    </th>
                    <th>
                        ${details.ammunition}
                    </th>
                </tr>
               </table>
              </div>
           </div>`
}

function tankDetail() {
    let model = location.hash.slice(1);
    tanks.forEach(el => {
        if (el.model === model) {
            rootNode.innerHTML = tankDetails(el);
        }
    });
    const backLink = document.getElementsByClassName('backList');
    backLink[0].addEventListener('click', () => {
        location.hash = '';
        window.history.go();
    });
}

window.onhashchange = tankDetail;
rootNode.appendChild(page());
