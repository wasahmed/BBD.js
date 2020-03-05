document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadREST);

function loadJSON(){
    fetch('employees.json')
    .then(function(response){
        // console.log(response);
        return response.json();//converts to js objects
    })
    .then(function(data){
        console.log(data);
        let html = '';
        data.forEach(function(employee){
            html += `
                <li>${employee.name}</li>
            `;

        });
        document.getElementById('result').innerHTML =html;
    })

}

function loadREST(){
    fetch('https://picsum.photos/list')
    .then(function(response){
        console.log(response.json());
        // return response.json();//converts to js objects
    })
    .then(function(data){
        console.log(data);
    })
    //     let html = '';
    //     data.forEach(function(employee){
    //         html += `
    //             <li>${employee.name}</li>
    //         `;

    //     });
    //     document.getElementById('result').innerHTML =html;
    // })

}