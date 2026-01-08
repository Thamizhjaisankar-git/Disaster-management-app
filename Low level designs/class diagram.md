```mermaid

classDiagram
    Disaster &quot;1&quot; --&gt; &quot;1&quot; Recovery : tracked_by
    Disaster &quot;1&quot; --&gt; &quot;*&quot; Alert : generates
    Resource &quot;*&quot; --&gt; &quot;*&quot; Shelter : allocated_to
    Disaster &quot;1&quot; --&gt; &quot;*&quot; Shelter : affects
    User &quot;1&quot; --&gt; &quot;*&quot; SOSRequest : raises
    Volunteer &quot;*&quot; --&gt; &quot;*&quot; SOSRequest : handles

    class Disaster {
        +UUID id
        +String type
        +String severity
        +String status
        +String affectedArea
    }

    class Recovery {
        +UUID id
        +String phase
        +int progress
        +double fundAllocated
    }

     class Resource {
        +UUID id
        +String type
        +int quantity
        +String location
    }

    class Alert {

        +UUID id
        +String title
        +String severity
        +String message
        +DateTime timestamp
    }

    class Shelter {
        +UUID id
        +int capacity
        +int occupied
        +String location
    }
   
    class User {
        +UUID id
        +String name
        +String phone
        +String role
        +String location
    }
   
     class Volunteer {
        +String skills
        +Boolean availability
        +int assignedTasks
    }

     class SOSRequest {
        +UUID id
        +String location

        +String helpType
        +String urgency
        +String status
    }

```
