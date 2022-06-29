## Services

In angular a service is class which is decorated with
an annotation called as injectable

that means service object does'nt need to be created by us,
we can get it injected through dependency injection [constructor based]

generally we use services to call external apis and components will call 
service functions to receive and store data about

service helps us to share functionality and data among multiple components.

a service can be create by using the command

```
ng g s servicename

```

### HttpClient

To call RESTAPI in angular, we use a service called HttpClient

using this httpclient object you can make get,post, delete,put and patch requests 
all these request return an Observable object

Observable

  Observable is part of RXjs framework

  this is meant to deal with asynchronous code 

  When we call a rest service, we wont get the data immediatly,
  it ll take few millisec to seconds to receive the data

  Hence angular uses Observable to make the program
  wait for the data to be recieved

  using Subscribe method observable object you can wait
  until data is received

  to use HttpClient we need to import HttpClientModule

  ### Form Handling

  In angular , Form handling can be done in two ways

    * Template based approach [ngModel]
    * Model Based Approach [FormBuilder]