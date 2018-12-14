"use strict"
let url = "http://localhost:8080/Servlet";
let ajaxReq;

window.onload = function() {
    let btn = document.getElementById("btn1");
    let a = document.getElementById("tx1");
    let b = document.getElementById("tx2");
    let c = document.getElementById("tx3");
    let table = document.getElementById("table");
    ajaxReq = new XMLHttpRequest();


    function procStage() {
        if (ajaxReq.readyState === 4){
            if(ajaxReq.status === 200){
                let message = ajaxReq.responseText;
                message = JSON.parse(message);
                let tr1 = document.createElement('tr');
                tr1.addEventListener("click",  function(e){
                   let el = e.target;
                   let r = el.parentElement;
                   table.deleteRow(r.rowIndex);
                });

                table.appendChild(tr1);

                let tdr = document.createElement('td');
                if(message["haveRoot"] === false) {
                    tdr.innerHTML = '--';
                }
                else{

                    tdr.innerHTML = message["root1"].toFixed(3) + ";" + message["root2"].toFixed(3);
                }
                tr1.appendChild(tdr);

                let tdr1 = document.createElement('td');
                tdr1.innerHTML = a.valueAsNumber;
                tr1.appendChild(tdr1);
                let tdr2 = document.createElement('td');
                tdr2.innerHTML = b.valueAsNumber;
                tr1.appendChild(tdr2);
                let tdr3 = document.createElement('td');
                tdr3.innerHTML = c.valueAsNumber;
                tr1.appendChild(tdr3);

            }
        }

    }

    btn.onclick = function () {
        let c1 = a.valueAsNumber;
        let c2 = b.valueAsNumber;
        let c3 = c.valueAsNumber;
        let res = {};
        res["a"] = c1;
        res["b"] = c2;
        res["c"] = c3;
        let date = JSON.stringify(res);

        ajaxReq.onreadystatechange = procStage;
        ajaxReq.open("POST", url);
        ajaxReq.send(date);
    };
    function deleteRow(tr) {
        table.deleteRow(tr);
    }
};