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

  ### pipes

  Pipes are generally used in template [html]

  it is represented by symbol |

  pipe is usually applied on scalar variable or an array 

  usually if you apply on a scalar variable [string,number,date], the data
  would formatted

  for example, some inbuilt pipes are

if data="raj" 

{{data | uppercase}}   - RAJ |

{{price | currency:"USD"}} - $5000

pipes can also be applied on array, currently there is no inbuilt pipe
that can be applied on array but we can implement it