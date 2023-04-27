var selectedSensorArray = [];
//selectedSensorArray = [{'make':'Sensotech','model':'Z','sensor_sl_no':['123','321'],'applied_excitation':[0,10],'applied_excitation_unit':['mv','mv'],'voltage_unit':['DC','AC']}];

function drawMainTable(noOfRows){
    let mainTable = document.getElementById('mainTable');

    for(let i=0;i<noOfRows;i++){
        let row = mainTable.insertRow();
        let c1 = row.insertCell(0);

        let c2 = row.insertCell(1);
        //FUNCTION TO POPULATE MAKE's 

        let c3 = row.insertCell(2);
        //FUNCTION TO POPULATE MODEL's 

         let c4 = row.insertCell(3);
         //CREATE BUTTON,ADD FUNCTIONS,
   
   
    }



} 


function drawInnerTable(rowNo){

}




function openPopUp(width,height,functionArrayDict){
    let popUp = document.querySelector('.pop-up-cont');
    popUp.style.pointerEvents = 'auto';
    popUp.style.transform = `translate(-50%,-50%) scale(1)`;
    popUp.style.width = width;
    popUp.style.height = height;
    let mainCont = document.querySelector('.main-cont');
    mainCont.style.filter='blur(10px)';

    // functionArrayDict = [
    //     {
    //         'functionName':nameOfFunction,
    //         'arguments':'1'
    //     },
    //     {
    //         'functionName':nameOfFunction2,
    //         'arguments':'1,2'
    //     }
    // ]


    for(let i=0;i<functionArrayDict.length;i++){
        let dictA = functionArrayDict[i];
        let functionName  = dictA.functionName;
        functionName(dictA.arguments);

    }
}


function closePopUp(){
    let popUp = document.querySelector('.pop-up-cont');
    let mainCont = document.querySelector('.main-cont');
    let popUpBody = document.querySelector('.pop-up-body');
    
    popUp.style.pointerEvents = 'none';
    popUp.style.transform = 'translate(-50%,-50%) scale(0)';
    
    popUpBody.innerHTML = ' ';

    mainCont.style.filter = 'blur(0px)';

}




function testA(a){
    alert(a);
}

function testB(a,b){
    alert(a,b);
}

















