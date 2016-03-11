  var bio = {
      "name": "Veena Varadarajan",
      "role": "Web Developer",
      "contacts": {
          "mobileNo": "412-656-4646",
          "email": "iyerveena08@gmail.com",
          "github": "VeenaIyer",
          "twitter": "Veena",
          "location": "Johnston, Rhode Island"
      },
      "welcomeMessage": "Udacity 2016, Front-End Development Course!!",
      "skills": ["programming",
          "running",
          "cooking",
          "singing"
      ],
      "biopic": "images/profile_pic.png"
  };

  bio.displayskills = function() {

      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedName, formattedRole);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobileNo);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


      $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
      $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

      var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(formattedImage);

      var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedWelcomeMsg);

      if (bio.skills.length > 0) {
          $("#header").append(HTMLskillsStart);

          $("#header").append(HTMLskills.replace("%data%", bio.skills[0]));
          $("#header").append(HTMLskills.replace("%data%", bio.skills[1]));
          $("#header").append(HTMLskills.replace("%data%", bio.skills[2]));
          $("#header").append(HTMLskills.replace("%data%", bio.skills[3]));
      }
  };

  var myinfo = {
      myData: {
          "tagline": "When I thought I couldn't go on, I forced myself to keep going.My success is based on performance, not luck. - Estee Lauder.",
          "image": "images/profile_pic.png",
          "whoami": "My name is Veena Iyer. I am 26 years old, currently living in Johnston",
          "desc": "In June 2013, I finished my MCA and have 3 years experience in Larsen & Toubro Infotech Ltd therein. Currently I have taken up a front-end development course in Udacity and is aiming for a job in a reputed organization."
      }
  };

  myinfo.display = function() {
      var formattedAboutMe = HTMLaboutMe.replace("%data%", myinfo.myData.whoami);
      $(".my-entry:last").append(formattedAboutMe);

      $("#aboutme").append(HTMLwhatDoIDo);
      $("#aboutme").append(HTMLmyEntry);

      var formattedMyDesc = HTMLmyDesc.replace("%data%", myinfo.myData.desc);
      $(".my-entry:last").append(formattedMyDesc);
  };

  var formattedMyTagline = HTMLmyTagline.replace("%data%", myinfo.myData.tagline);
  $("#aboutme").append(formattedMyTagline);
  $("#aboutme").append(HTMLwhoAmI);
  $("#aboutme").append(HTMLmyEntry);

  var pie = new d3pie("pieChart", {
      "header": {
          "title": {
              "text": "A Day in my Life",
              "fontSize": 22,
              "font": "verdana"
          },
          "titleSubtitlePadding": 12
      },
      "size": {
          "canvasHeight": 400,
          "canvasWidth": 590,
          "pieInnerRadius": "12%",
          "pieOuterRadius": "88%"
      },
      "data": {
          "content": [{
              "label": "Sleeping",
              "value": 8,
              "color": "#577e38"
          }, {
              "label": "Household Chores",
              "value": 3,
              "color": "#42bbb7"
          }, {
              "label": "Watching TV",
              "value": 2,
              "color": "#cccf4d"
          }, {
              "label": "Cooking",
              "value": 2,
              "color": "#7e3838"
          }, {
              "label": "Studying",
              "value": 4,
              "color": "#e1b668"
          }, {
              "label": "Gyming",
              "value": 1,
              "color": "#c874b8"
          }]
      },
      "labels": {
          "outer": {
              "pieDistance": 32
          },
          "inner": {
              "format": "value"
          },
          "mainLabel": {
              "font": "verdana"
          },
          "percentage": {
              "color": "#e1e1e1",
              "font": "verdana",
              "decimalPlaces": 0
          },
          "value": {
              "color": "#e1e1e1",
              "font": "verdana"
          },
          "lines": {
              "enabled": true,
              "color": "#cccccc"
          },
          "truncation": {
              "enabled": true
          }
      },
      "effects": {
          "pullOutSegmentOnClick": {
              "effect": "linear",
              "speed": 400,
              "size": 8
          }
      }
  });
  var work = {
      jobs: [{
          "employer": "Larsen & Toubro Infotech Ltd.",
          "title": "Software Engineer",
          "location": "Mumbai, India",
          "dates": "01-28-2013 - 11.06.2015",
          "description": "Worked in the Insurance domain. Have an experience of Duck creek Technologies which is used for P&C Insurance. Used various tools like Example Author, Example Util and Data-Tester. Output was displayed on Express, which was basically Internet Explorer. Solved difficult issues, good debugging skills. Interacted with the client, analyzed the requirements, developed appropriate code, tested the same with satisfactory results. Delivered work on time and helped peers."
      }]
  };
  work.display = function() {
      for (var job in work.jobs) {
          if (work.jobs.hasOwnProperty(job)) {
              $("#workExperience").append(HTMLworkStart);

              var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
              var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
              var formattedEmployer = formattedWorkEmployer + formattedTitle;

              $(".work-entry:last").append(formattedEmployer);

              var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
              $(".work-entry:last").append(formattedWorkDates);

              var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
              $(".work-entry:last").append(formattedWorkLocation);

              var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
              $(".work-entry:last").append(formattedWorkDescription);
          }
      }
  };

  var projects = {
      "projects": [{
          "title": "Policy Admin System",
          "dates": "01-28-2013",
          "description": "Policy Admin System was aimed to develop an 'Online Insurance Portal'. It is a web-based application, which was mainly developed for the agents of the4 insurance company to take the policy for his clients electronically. Online Insurance Portal System is an integrated insurance system which links up all the channels within the insurance industry. It is a revolutionized insurance solution that can facilitate online processing and services to the insurance partners, agents and customers through the Internet. The Online Insurance Portal provides a numerous policy for the customers, so that the customer can view all the policy, complete details and benefits about the policy. The online assistance will help the customer to choose the policy he/she wants and the premiums calculator are been use to calculate the premium amount of their own policies. The customer can buy their policies through online, and the payments can be made through credit/debit cards. The premium payment and policy renewal date can be intimated to the customers through emails. Policy premium payments and renewal of the policies can also be done through online.",
          "images": ["images/architecture.png", "images/PAS.gif"]
      }]
  };

  projects.display = function() {
      $("#projects").append(HTMLprojectStart);

      for (var project in projects.projects) {
          if (projects.projects.hasOwnProperty(project)) {
              var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
              $(".project-entry").append(formattedProjectTitle);

              var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
              $(".project-entry").append(formattedProjectDates);

              var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
              $(".project-entry").append(formattedProjectDescription);

              var formattedProjectImage1 = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
              $(".project-entry").append(formattedProjectImage1);

              var formattedProjectImage2 = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
              $(".project-entry").append(formattedProjectImage2);
          }
      }
  };


  var education = {
      "schools": [{
          "name": "SIES College Of Management Studies",
          "location": "Navi Mumbai, India",
          "degree": "Masters in Computer Applications",
          "majors": ["Operating Systems", "Data Structures"],
          "dates": "07-01-2007",
          "url": "http://www.siescoms.edu"
      }, {
          "name": "Birla College of Arts, Science & Commerce",
          "location": "Kalyan, India",
          "degree": "B.Sc in Computer Science",
          "majors": ["System Analysis", "Management Information Systems"],
          "dates": "07-01-2010",
          "url": "http://www.birlacollege.org"
      }, ],
      "onlineCourses": [{
          "title": "Front-End Development",
          "school": "Udacity",
          "date": "01-04-2016",
          "url": "www.udacity.com"
      }]
  };

  education.display = function() {
      $("#education").append(HTMLschoolStart);

      for (var school in education.schools) {
          if (education.schools.hasOwnProperty(school)) {
              var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
              formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
              $(".education-entry:last").append(formattedSchoolName);

              var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
              $(".education-entry:last").append(formattedSchoollocation);

              var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
              $(".education-entry:last").append(formattedSchoolDates);

              var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
              $(".education-entry:last").append(formattedSchoolDegree);

              var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
              $(".education-entry:last").append(formattedSchoolMajors);
          }
      }

      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);


      for (var onlineCourse in education.onlineCourses) {
          if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
              var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
              $(".education-entry:last").append(formattedOnlineTitle);

              var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
              $(".education-entry:last").append(formattedOnlineSchool);

              var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
              $(".education-entry:last").append(formattedOnlineDate);

              var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
              $(".education-entry:last").append(formattedOnlineURL);
          }
      }
  };

  $("#main").append(internationalizeButton);

  $("#mapDiv").append(googleMap);

  function inName(name) {
      var names = name.split(" ");
      var surname = names[0] + " " + names[1].toUpperCase();
      return surname;
  }

  education.display();
  bio.displayskills();
  projects.display();
  work.display();
  myinfo.display();