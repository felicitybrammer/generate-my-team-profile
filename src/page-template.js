  
  const generateTeam = team => {
    return `    
        <div class="flex-row justify-space-between">
            ${team
            .filter(({ officeNumber }) => officeNumber)
            .map(Manager => {
                return `
                <div class="col-12 mb-2 bg-dark text-light p-3">
                <h3 class="text-light">${Manager.name}</h3>
                <h5 class="text-secondary">${Manager.getRole()}</h5>
                <div class="card-body flex-column bg-secondary">
                    <p>ID: ${Manager.id}</p>
                    <p>Email: ${Manager.email}</p>
                    <p>Office Number: ${Manager.officeNumber}</p>
                </div>
                </div>
            `;
            })
            .join('')}

            ${team
                .filter(({ github }) => github)
                .map(Engineer => {
                    return `
                    <div class="col-12 mb-2 bg-dark text-light p-3">
                    <h3 class="text-light">${Engineer.name}</h3>
                    <h5 class="text-secondary">${Engineer.getRole()}</h5>
                    <div class="card-body flex-column bg-secondary">
                        <p>ID: ${Engineer.id}</p>
                        <p>Email: ${Engineer.email}</p>
                        <p>Github: ${Engineer.officeNumber}</p>
                    </div>
                    </div>
                `;
                })
                .join('')}

                ${team
                    .filter(({ school }) => school)
                    .map(Intern => {
                        return `
                        <div class="col-12 mb-2 bg-dark text-light p-3">
                        <h3 class="text-light">${Intern.name}</h3>
                        <h5 class="text-secondary">${Intern.getRole()}</h5>
                        <div class="card-body flex-column bg-secondary">
                            <p>ID: ${Intern.id}</p>
                            <p>Email: ${Intern.email}</p>
                            <p>Office Number: ${Intern.school}</p>
                        </div>
                        </div>
                    `;
                    })
                    .join('')}
        </div>
    `;
  };
  
  
  module.exports = team => {
      
      //destructure projects and about data from templateData based on their property key names
      //creates three variables based on data in template
      //const {projects, about, ...header} = templateData;
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
        <link rel="stylesheet" href="style.css">
      </head>
    
      <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark text-light py-2 px-3">My Team</h1>
            // <nav class="flex-row">  
            //   <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">Github</a>
            // </nav>
          </div>
        </header>
        <main class="container my-5">
          ${generateTeam(team)}
          
        </main>
        // <footer class="container text-center py-3">
        //   <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
        // </footer> 
      </body>
      </html>
      `;
    };