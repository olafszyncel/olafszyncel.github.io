function toggleMenu() {
	const menu = document.getElementById("dropdownMenu");
	if (menu.style.display === "none" || menu.style.display === "") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}
		
function loadSkillImage(skill) {
    const browserContent = document.getElementById('browser-content');
	const browserLink = document.getElementById('browser-link');
			
	switch(skill) {
		case 'home':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<p>Select a skill to see more details!</p>
				</div>`;
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/home</a>`
			break;
			
		case 'python':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<ul>
						<li>
							CaloricCalculator web app written using the django framework
							<ul>
							<li><a href="https://github.com/olafszyncel/caloriccalculator/">Code</a></li>
							<li><a href="https://cc.olafszyncel.pl">Page</a></li>
							</ul>
						</li>
						<li>
						temperature prediction in Durres (Albania)
							<ul>
								<li><a href="https://colab.research.google.com/drive/1uf4FyJBEaHel1SvOMOo9nvDb-cniOe56?usp=sharing#scrollTo=m195yzkpcsNn">Code and Results</a></li>
							</ul>
						</li>
						<li>
						MatriculationCourse web app written using the Flask framework
							<ul>
								<li><a href="https://github.com/olafszyncel/matriculationCourse">Code</a></li>
							</ul>
						</li>
					</ul> 
				</div>`
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/python</a>`
			break;
				
		case 'javascript':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<ul>
						<li>
						This page &#128512;
							<ul>
								<li><a href="https://github.com/olafszyncel/">JavaScript Code</a></li>
								<li><a href="https://olafszyncel.pl">Page</a></li>
							</ul>
						</li>
						<li>
						CaloricCalculator JS file
							<ul>
								<li><a href="https://github.com/olafszyncel/caloriccalculator/blob/main/calcal/static/calcal/app.js">JavaScript Code</a></li>
								<li><a href="https://cc.olafszyncel.pl">Page</a></li>
							</ul>
						</li>
						<li>
						freeCodeCamp certification projects
							<ul>
								<li><a href="https://www.freecodecamp.org/certification/ainzuuu/javascript-algorithms-and-data-structures">Code bellow the certificate</a></li>
							</ul>
						</li>
							
					</ul> 
				</div>`
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/javascript</a>`
			break;
			
		case 'java':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<ul>
						<li>
							Java code based on module assignments at university
							<ul>
								<li><a href="https://github.com/olafszyncel/PodstawyProgramowaniaJava">Code</a></li>
							</ul>
						</li>
					</ul>
				</div>`
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/java</a>`
			break;
			
		case 'php':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<ul>
						<li>
							PHP code based on module assignments at university
							<ul>
								<li><a href="https://github.com/olafszyncel/aplikacjeSieciowe">Code</a></li>
							</ul>
						</li>
						<li>
							RestaurantSite web app
							<ul>
								<li>I'm working on it</li>
							</ul>
						</li>
					</ul>
				</div>`
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/php</a>`
			break;
			
		case 'django':
			var x = window.matchMedia("(max-width: 768px)");
			if(x.matches) {
				browserContent.innerHTML = `<img src="static/projects/pythonmobile.png" alt="python skill">`;
			} else {
				browserContent.innerHTML = `<img src="static/projects/python.png" alt="python skill">`;
			}
			browserLink.innerHTML = `<a class="link-text" href="https://cc.olafszyncel.pl">cc.olafszyncel.pl</a>`
			break;
			
		case 'sql':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<ul>
						<li>
							DataBase project (in polish) and SQL code based on module assignments at university 
							<ul>
								<li><a href="db.pdf">Project pdf with code</a></li>
							</ul>
						</li>
						<li>
							I also use SQL in:
							<ul>
								<li>CaloricCalculator project</li>
								<li>MatriculationCourse project</li>
								<li>RestaurantSite project</li>
								<li>Bash projects</li>
							</ul>
						</li>
					</ul>
				</div>`
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/sql</a>`
			break;
			
		case 'bash':
			browserContent.innerHTML = `
				<div class="browser-content-container">
					<ul>
						<li>
							Script to insert data from csv files into sql database
							<ul>
								<li><a href="csvtosql.pdf">Code</a></li>
							</ul>
						</li>
						<li>
							Script - Bike Rental Shop Project 
							<ul>
								<li><a href="bikerental.pdf">Code</a></li>
							</ul>
						</li>
						<li>
							Cloning Debian partitions using the dd command (in polish)
							<ul>
								<li><a href="debian.pdf">Task Report</a></li>
							</ul>
						</li>
						<li>
							Installation and configuration of www dns server
							<ul>
								<li>I'm working on it</li>
							</ul>
						</li>
							
					</ul>
				</div>`
			browserLink.innerHTML = `<a class="link-text" href="#skill">127.0.0.1/bash</a>`
			break;
			}
        }