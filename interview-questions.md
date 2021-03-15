# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: following the MVC pattern means that rails has three different ways in which you can interact with data. One way is by observing the model of what a data table might look like, another is being able to view the data, and the last is being able to control what the data is doing.

  Researched answer: means rails has an architectural separation of the app its working with. The separations are placed into three categories that will live within the app directory of the application. These separations will be between how the data and logic will be performing (model), what the user will be seeing on the screen graphically (the view), and the functionality of the interface with the application (controller).

  https://www.bogotobogo.com/RubyOnRails/RubyOnRails_Model_View_Controller_MVC.php#:~:text=Rails%20has%20an%20application%20directory,graphical%20user%20interface%20(GUI).


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: if an application has CRUD it means that it has the ability to create, read, update, and delete content either by the user or other changes in the application.

  Researched answer: four functions that are necessary to implement a persistent storage application. Persistent storage refers to any storage device that retains power after the device is powered off, such as a hard disk or a solid-state drive. Create, read, update, and Delete. These functions help keep data up to date. 

  https://www.sumologic.com/glossary/crud/#:~:text=CRUD%20is%20an%20acronym%20that,%2C%20read%2C%20update%20and%20delete.


3. What is a relational database? Are there other kinds of databases?

  Your answer: a relational database is a type of database that forms connections with other tables. The data will have relationships between each other. There are other types of databases that do not hold relationships with other data within them but I dont remember the term for them.  

  Researched answer: database that stores and provides access to data points that are related to one another. Other kinds of databases are hierarchical (tree-like structure, one-directional), network (similar to tree structure but with two-directional relationships instead of one), non-relational (multiple formats: documents, graphs, wide-columns, etc.). 

https://www.astera.com/type/blog/a-quick-overview-of-different-types-of-databases/


4. What are the 5 HTTP verbs? What are they important?

  Your answer: The 5 HTTP verbs, if I remember correctly are: puts, delete, and post are the only ones coming to my head right now. They are important because they serve as instructions for what a request should be doing.  

  Researched answer: GET, POST, PUT, PATCH, and DELETE. These verbs are important because they serve as actions that tell computers how to interact with each other and what is going to be occurring in each interaction. 
  1. Get - fetches data from the server or displays the content requested
  2. Post - creates content (typically by the user)
  3. Put - updates content (changes some existing content; edits)
  4. Patch - also updates content similar to put
  5. Delete - deletes content  
  - extras:
  6. Safe method - get (doesnt change anything in the server, there are no side effects, it is solely retreiving information and displaying it)
  7. Unsafe methods - delete (deletes something from the server), post (create new data on the server so you are changing it), put (updating data which is changing the content in the server as well)
  8. Idempotency - the state of the system you are dealing with will remain the same no matter how many times you perform the same action (so if you are updating the same content with the exact same content (like with a puts), there will be no difference in the outcome so it is said then, that that request is idempotent. But if you are creating a new message and run that request again, you've created another message, and if you run it again, you'd have created a third message, so this 'post' request is not idempotent) 

  https://robm.me.uk/2013/09/http-verbs/


5. What is object-relational mapping?

  Your answer: object-relational-mapping is what is used by ruby in order to transition data from ruby code to sql queries. 

  Researched answer: a library that implements the technique of writing queries using an object oriented programming language like Ruby. The ORM maps over a ruby 'query' and transforms it into a SQL query that will ask the database to store that information into tables and columns.

  Lecture: 3/9 - Intro to Databases (Mina) 
  https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a


6. What is a gem?

  Your answer: a gem is what ruby calls its packages. 

  Researched answer: is a ruby package with a name, version, and platform. Each gem contains code, documentation, and gemspec. Structure of a gem: 
    1. lib - directory that contains the code for the gem
    2. test - directory that contains tests, depending on which test framework is being used by the developer
    3. Rakefile - automate tests, generate code, and perform other tasks using the 'rake' program
    4. executable file in 'bin' directory which gets loaded into the users path when the gem is installed
    5. readme - the documentation for the gem (RDoc documentation or YARD documentations) 
    Rails is a collection of 8 or 9 gems that allows the file structure of rails to be built. A bunch of dependencies that allow rails apps to run. Similarly to react having a bunch of node modules strung together by yarn (or npm). 

    Lecture: 3/10 - Intro to Ruby on Rails (Sarah)
    https://guides.rubygems.org/what-is-a-gem/


7. What are primary keys? Why are they important?

  Your answer: a primary key is the main key belonging to table. They are important because they reference specific observations.

  Researched answer: key or id that is generated as a column automatically once an instance or record is created in a table. It is used to uniquely identify each instance recorded in a table.

  https://www.ques10.com/p/9627/explain-primary-key-with-suitable-example-1/



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- RESTful routes - architectural style (or route) for mapping from HTTP verbs to CRUD actions. A route is responsible for listening and receiving requests and then deciding what to respond. REST stands for Representational State Transfer: makes network communication more scalable and flexible.

https://medium.com/@shubhangirajagrawal/the-7-restful-routes-a8e84201f206

- JSON - stands for Java Script Object Notation. It is a file format used for storing and transporting data. Usually used when data is sent from a server to a web page. Typically consists of key:value pairs and array data types.

https://www.w3schools.com/whatis/whatis_json.asp

- Validations - automatic computer check that checks if the data entered is reasonable but does not check for accuracy of data. This would check to see if the information entered makes sense. For example, if a variable is supposed to be a string, then validation checks to see if it is a string, or, if a program accepts a range of numbers, the validation checks to see if the range is correct, etc. 
Another example for the format of a bank check: checks the data is in the right format --> A National Insurance number is in the form LL 99 99 99 L where L is any letter and 9 is any number

https://www.bbc.co.uk/bitesize/guides/zdvrd2p/revision/1#:~:text=Validation%20is%20an%20automatic%20computer,check%20the%20accuracy%20of%20data.&text=The%20computer%20can%20be%20programmed,This%20is%20a%20range%20check.

- Strong params - (feature of Rails) is a predefined syntax that rails uses to specify the type of perameter an object should receive. It prevents assigning request perameters to objects (unless explicitly permitted). It has its own domain specific language.   

https://medium.com/@tbrisker/strong-parameters-in-rails-down-the-rabbit-hole-2426d331625#:~:text=Strong%20Parameters%20is%20a%20feature,what%20parameters%20should%20be%20allowed.
