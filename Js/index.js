(function (){
    function renderSystem(){
        const system =getSystem();
        document.querySelector("#system").innerHTML="";
        system.forEach(s => addChamadotoSystem(s))
            
        }
    function addChamadotoSystem(chamados){
        const row =document.createElement("tr");
        row.innerHTML=`
        <td> ${chamados.cliente}</td>
        <td> ${chamados.chamado}</td>
        <td> ${chamados.contrato}</td>
        <td> ${chamados.file}</td>
        <td>"${chamados.time}"> ${new Date (chamados.time).toLocaleString("pt-BR", {
            day:"numeric", month:"numeric", hour:"numeric", minute: "numeric"
        })}
        <td> 
        <button class="delete"> Mudar Status do Chamado </button>


        </td> 
        `;
        document.querySelector("#system").appendChild(row);
     


    }
    function checkOut(info){
        const licence = info[1].textContent;
        console.log(licence)
        
        const msg = `Deseja encerrar este chamado?`;
        if (!confirm(msg)) return;
        const system= getSystem().filter(cliente, chamado, contrato, file);
        localStorage.system =JSON.stringif(system);

        renderSystem();
        

    }

    /*const getSystem=() => 
        localStorage.system ? JSON.parse (localStorage.system): [];
        renderSystem();*/
    
    document.querySelector(".send").addEventListener("click", e => {
        const cliente = document.querySelector("#cliente").value
        const chamado = document.querySelector("#chamado").value
        const contrato = document.querySelector("#contrato").value
        const file = document.querySelector("#file").value;
        if(!cliente || !chamado || !contrato || !file){
            alert ("Os campos são obrigatórios!")
            return;
        }

        const chamados ={
            cliente, chamado, contrato, file, time: new Date()
        }

        //tenario e localstorage
        const system = localStorage.system ? JSON.parse (localStorage.system): [];

        system.push(chamados);
        localStorage.system = JSON.stringify(system);

     
        document.querySelector("#cliente").value
        document.querySelector("#chamado").value
        document.querySelector("#contrato").value
        document.querySelector("#file").value

        addChamadotoSystem(chamados)
    });
    document.querySelector("#system").addEventListener("click", e => {
        if(e.target.className =="delete")
        checkOut(e.target.parentElement.parentElement.cells);
    })

})();

