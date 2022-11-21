## STEPS TO FOLLOW
1. Install dev tools
    1. node
    2. @angular/cli
    3. postman
    4. git


2. Create Angular App
    1. Create project folder & frontend subfolder
    2. Install @angular/cli
    3. Create Angular App in frontend folder


3. Add Header
    1. Generate Component at --> src/app/components/partials/header
    2. Add HTML
    3. Add CSS


4. List Food
    1. Create Food model at --> src/app/shared/models/Food.ts
    2. Create data.ts at --> src/data.ts
        1. Add sample foods (dummy data)
    3. Add images to assets at --> src/assets
    4. Create Food service at --> src/app/services/food.service.ts
        1. Add method to food service to return the dummy data
    5. Create Home component at --> src/app/components/pages/home
        1. Add ts
        2. Add html
        3. Add css


5. Search
    1. Add method to food service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css


6. Tags Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food Service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css


7. Food page
    1. Add method to food service
    2. Generate Food Page component
        1. Add route
        2. Add ts
        3. Add html
        4. Add css


8. Cart page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Carte Service   !!!!!!!!!!! THIS ONE IS INTERESTING !!!!!!!!!!!!!
    4. Add Cart Button in Food page
    5. Generate Cart page component
        1. Add route
        2. Add ts
        3. Add html
        4. Add css

9. Search : No result found !
    1. Generate component
        1. Add ts
        2. Add html
        3. Add css
    2. Add To Pages
        1. Home Page
        2. Food Page
        3. Cart Page

 10. Connect to Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. Add APIs
    9. npm install nodemon ts-node --save-dev
    10. Add urls.ts to frontend
    11. Add HttpClient Module
    12. Update food service

11. Login Page
    1. Generate component
        1. Add to routes
        2. Add ts
        3. Add html
        4. Add html
            1. Import Reactive forms Module
        5. Add CSS
    2. Add Login API
        1. Use Json
        2. Add JsonWebToken
        3. Test using postman
    
    3. Generate User Service aka connect LoginPageComponent to the LoginAPI
        1. Generate User model
        2. Add User Subject
        3. Add Login Method
            1. Add User Urls
            2. Generate IUserLogin interface
            3. Add ngx-toastr
                1. Imporrt Module
                2. Import BrowserAnimationModule
                3. Add styles in angular.json
                    1. "styles": ["node_modules/ngx-toastr/toastr.css", ...
                    2. stop serving the frontend
                    3. cd /frontend && npm start 
            4. Add to Header
        4. Add Local Storage methods : set & get UserFromLocalStorage
        5. Hide LogIn from Header once we are loged in
        6. Add Logout Method
            1. Add to Header
12. Make Components for Login page
    1. Input Container (+label)
    2. Input Validation
    3. Text Input
    4. Default Button


