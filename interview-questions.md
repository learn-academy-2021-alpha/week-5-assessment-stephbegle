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

  Researched answer: 



3. What is a relational database? Are there other kinds of databases?

  Your answer: a relational database is a type of database that forms connections with other tables. The data will have relationships between each other. There are other types of databases that do not hold relationships with other data within them but I dont remember the term for them.  

  Researched answer: database that stores and provides access to data points that are related to one another. Other kinds of databases are hierarchical (tree-like structure, one-directional), network (similar to tree structure but with two-directional relationships instead of one), non-relational (multiple formats: documents, graphs, wide-columns, etc.). 

https://www.astera.com/type/blog/a-quick-overview-of-different-types-of-databases/

4. What are the 5 HTTP verbs? What are they important?

  Your answer: The 5 HTTP verbs, if I remember correctly are: puts, delete, and post are the only ones coming to my head right now. They are important because they serve as instructions for what a request should be doing.  

  Researched answer: POST, PUT, GET, PATCH, and DELETE. They are important 



5. What is object-relational mapping?

  Your answer: object-relational-mapping is what is used by ruby in order to transition data from ruby code to sql queries... I think. 

  Researched answer: is a ruby package with a name, version, and platform



6. What is a gem?

  Your answer: a gem is what ruby calls its packages. 

  Researched answer:



7. What are primary keys? Why are they important?

  Your answer: a primary key is the main key belonging to table. They are important because they reference specific observations.

  Researched answer:



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
