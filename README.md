# README

I am using:
- Ruby 3.0.6
- Rails 7.0.6
- React for front end (see package.json for all info)
- postgresql for db engine
- esbuild for js bundler
- bootstrap for css 

To run (assuming everything required is installed), just do the below in your terminal:
- rails db:create
- rails db:migrate
- rails db:seed
- bin/dev

  
and see the app in your browser at http://127.0.0.1:3000 (or at url given in terminal log of bin/dev)



**Notes on process:**
- I used this as a guide to refresh myself on using react with rails:
    - https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-v7-project-with-a-react-frontend-on-ubuntu-20-04#step-1-creating-a-new-rails-application
    - I was taking notes as I refreshed myself as it helped me keep track of what I was doing, and I left them in because it helped me as I went along (this just helps me remember things when I later and I may want to look back at this again)
- I had to spend a lot of time on setup
    - I have been an ML engineer for the past 2+ years, not doing full stack or web dev work, and then also have a new computer that I got after stopping working/starting my break 6 months ago
        - I have only used python--mainly just simple algorithmic apps (like DS/algos-related exercises) and other studying related exercises (like some ML related stuff)--on my new computer, so my environment was not at all set up for any of this,
        - Plus I have not done any full stack / web dev work in the past few years so I was also quite rusty so set up was not totally speedy all the way...
        - However, I had an AMAZING time, it was so fun to be doing dev work again, its so satisfying and I really wished I could have continued, but did not want to spend too much time

**Choices I made**
- For now, there is no ability to create or edit any objects in app. I am creating coaches, students, and slots in the seed file only at this point. (I have some views that are linked to but not build out yet, such as to view an individual coach, create a coach, or create a slot) 
- Things I implemented in the functionality (even if not accessible via the front end yet i.e.: you have to interact with the app via directly creating things in rails console)
    - The models and controllers for coaches, students and slots 
    - Appropriate relationships between the entities (see models and migrations for fields and validations, and see pic at * at bottom for foreign key relations drawing)
    - Validation on the slot creation (not allowing the creation of overlapping slots for the same coach)
    - I got the events to render in a calendar correctly, showing different colors for diff coaches
- I did not get around to allowing users to update slots by assigning a student to them, so that is a piece of functionality I would add next
- following that, I would implement all the rest of the requirements that I did not get to: views that are specific to the user (coach vs. students), and the ability to book slots as a student, and the ability to create and update slots as a coach in the web app


**Here are som screenshots of a walk thru the app:**
(homepage_screenshot.png)
￼![homepage_screenshot](https://github.com/beatrixbetsycarroll/rails_react_scheduler/assets/8547956/a1147fce-c269-4c5e-bbcc-4389d021ffe9)


Clicking View Coaches from the home page would bring you here:
(coaches_view_screenshot.png)
![coaches_view_screenshot](https://github.com/beatrixbetsycarroll/rails_react_scheduler/assets/8547956/5518ab94-9449-4253-a68f-f6f59caa87b0)

Clicking View Slots from the home page would bring you here:
(slots_view_screenshot.png)
![slots_view_screenshot](https://github.com/beatrixbetsycarroll/rails_react_scheduler/assets/8547956/5573ac63-f26f-4311-a96c-b790378a864f)








*diagram of db relations
(db_diagram_screenshot.png)￼
<img width="1136" alt="db_diagram_screenshot" src="https://github.com/beatrixbetsycarroll/rails_react_scheduler/assets/8547956/59d5109e-9f8e-4cf7-9234-018f0685fb10">



