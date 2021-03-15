# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

$ rails new new_application -d postrgesql -T
$ cd new_application
$ rails db:create

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

    1. first you would want to generate a migration for adding a column: 
        $ rails g migration add_foreign_key
        $ rails db:migrate
    2. then in the text-editor, under the add_foreign_key schema:
        add this line to that class --> add_column(:table, :new_column_name, :datatype)
    3. Go back to terminal and run:
        $ rails db:migrate

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails g model Person shirt:string pants:string shoes:string

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention for generating a rails model is a singular word capitalized using PascalCasing. The convention for a table is the pluralized word of the model in snake_case.

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

The Book model would contain the foreign key and it would be named libraries_id. 

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema file in rails application is a model of the structure of what your table will look like and how it will be gathering data. It is like a blueprint of how your data will be flowing within your application. You should not modify the schema table directly because it will not update any changes unless you make the changes in the console.  
