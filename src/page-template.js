  
  const generateTeam = team => {
    //console.log(team);
    //console.log('hello', team[0].officeNumber); 
    //console.log(`${team.filter(e => e.officeNumber)[0].officeNumber}`); 

   return `   
     
       <div class="flex-row justify-center align-center col-12">
           ${team
           .filter((employee) => employee.officeNumber)
           .map(Manager => {
               return `
               <div class="col-3 card flex-column">
                <div class="card-header flex-column">
                 <h3>${Manager.name}</h3>
                 <h5>${Manager.getRole()}</h5>
                </div>
                <div class="card-body flex-column bg-light">
                   <p>ID: ${Manager.id}</p>
                   <p>Email: ${Manager.email}</p>
                   <p>Office Number: ${Manager.officeNumber}</p>
               </div>
              </div> 
           `;
           })
           .join('')}

           ${team
               .filter((employee) => {
                 return employee.github;
               })
               .map(Engineer => {
                   return `
                   <div class="col-3 card flex-column">
                    <div class="card-header flex-column">
                      <h3 >${Engineer.name}</h3>
                      <h5>${Engineer.getRole()}</h5>
                    </div> 
                    <div class="card-body flex-column bg-light">
                       <p>ID: ${Engineer.id}</p>
                       <p>Email: ${Engineer.email}</p>
                       <p>Github: <a href='https://github.com/${Engineer.github}'></a> ${Engineer.github}</p>
                    </div>
                  </div>  
               `;
               })
               .join('')}

               ${team
                   .filter((employee) => {
                     return employee.school;
                   })
                   .map(Intern => {
                       return `
                       <div class="col-3 card flex-column">
                         <div class="card-header flex-column">
                            <h3>${Intern.name}</h3>
                            <h5>${Intern.getRole()}</h5>
                         </div>
                          <div class="card-body flex-column bg-light">
                              <p>ID: ${Intern.id}</p>
                              <p>Email: ${Intern.email}</p>
                              <p>School: ${Intern.school}</p>
                          </div>
                      </div>   
                   `;
                   })
                   .join('')}
       </div>
   `;
};
  // module.exports = generateTeam; 
  
module.exports = team => {
     //console.log(generateTeam(team));
      
      return `
      <!DOCTYPE html> 
      <html lang="en"> 
       <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Profile</title>
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
       </head>
    
       <body>
        <header>
           <div class="container flex-row justify-space-between align-center py-3">
             <h1 class="page-title text-secondary py-2 px-3">My Team</h1>
           </div>
        </header>
        <main class="container my-5">
        ${generateTeam(team)} 
         </main>
        
        </body>
       </html>
       `;
  };