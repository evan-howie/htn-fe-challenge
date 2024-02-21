# Hackathon Global Inc.

## Evan Howie - Hack the North Front End Challenge 2024

1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

To begin my development process, I first planned out the structure and design of my web application, as well as the tools with which I would build it. I knew that the web application would have to dynamically render content from the api endpoint and manipulate state, so I chose to use React (with typescript) as a frontend framework for my web app. I knew I would like to have routing in my application, so I chose to use the easy and performant react-router-dom for routing. I also chose to use Tailwind CSS out of personal preference (I find I develop faster with Tailwind).

After I chose the tools for my application, I went straight into prototyping designs for my application. I first made sure to set up my Netlify continuous deployment (something I always do first in my projects). I also actively chose not to use Figma to prototype the design of my application due to the reasonable workload at hand. Looking back on this decision, I regret it deeply. A problem that I encountered while prototyping designs was that I would make sizable progress on one design, then scrap it because I did not like it. To solve this problem, I simply realized i was making this mistake and just committed to a decision.

Overall, I believe this project was a success and I am largely proud of the result. I modularized the application by splitting functionalities up into components, functions, and routes. For example, instead of making one big component for the EventList, I decided to split it up into sections. I created sub components EventListToolbar and EventListEntry (as well as sub components of those) in order to maintain single functionality and code readability. Another area I am particularly proud of was in the authentication. Although this is not by any means how authentication would work in a production environment (lacks security, etc.), my solution ended up being very easy to implement and use across components and functions in my application.

2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?

Given additional time, I would make many changes to the core functionality of my application. The first thing that I would change would be the authentication. As I said previously, the current method of authentication does not fit a production environment. One example of this can be seen in the permission filtering of events on the client. By filtering the events on the client, we run the risk of users viewing the content delivered over the network to view events they should not have permission to see. To fix this, I would implement server side authentication and filter the events through a server side query.

I would also add to the core functionality of the application. Some simple things that I would add are embedded video for public urls (and metrics), user interface improvements (collaborating with design team), favouriting events to stay at the top of the list (and persist between sessions).

On top of changing the core functionality of the application, I would add performance metrics. Simple things like number of visits to each route and usage metrics of different functionalities (clicking links, event list toolbar functions, etc.) are very useful for performance driven feedback and improvement.

3. Any other thoughts you have (not limited to the previous questions).

Overall, this project was a great test that accomodates many different skill levels (very fun 😄). Would do again 😎!
