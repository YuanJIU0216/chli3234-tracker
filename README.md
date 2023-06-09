# chli3234-tracker



# Iteration and improvement part

**feedback from tutor and Assessment 3** For this Final Assessment, I almost refresh and iterate all the context and data model related to my assessment 3. 

* __The first one is data model question__ This images is my previous data model, but it's too board. Therefore tutor suggest me to narrow down the target audience futher to help justify further design choices. And also An online community and recommendations is beyond the scope of this task, so it's not necessary to include these goals. the data model should cover each data point for each item that the user inputs, it should not include the users personal details for something such as a profile as this information would only need to put in once.

![This is the alt text](./public/readMeImages/dataModel1.png)


* __2.data model question iteration and improvements__ Therefore, I Finish my new data model, which contains "Name", "Weight", "Duration”，"Exercise Type", "Strength" And also auto caluclute data "time", "id" and "Calories Burned". I narrow my target user scope from whole sport group to swimming group. 

1. Calories Burned : are caluculate from "weight,duration,strength" . It can tell user how much calories burned during different swimming exercise. 

2. Exercise type: "warm-up", "swimming" and "others" These can be get correspond images 

3. Strenght type: "light", "moderate" and "heavy" These can be get correspont images and show it in website.

![This is the alt text](./public/readMeImages/dataModel2.png)



This is How I use these datas from user and auto calculate. These will be  suggest plan help user to get their own today plan and record their exercise in the local storage. And also give the some feedback about "This is how many Claories I burned during exercise and also give me clear visual plan"

![This is the alt text](./public/readMeImages/dataModel3.png)

* __2.wireframe, mockup question iteration and improvements__  For this part, I also rebuild my website and try to make it better. Because the original one, I make too many pages but didn't use data model very well. Therefore, tutor told me that " It is unclear from the wireframes how a user would input their fitness activities. You have included different pages on the website, however in the design brief we have specified only one page." And also on the mockup part "The style choice and branding was a nice tough to the mockups. Your mockups were mostly well designed with a strong colour palette. Some of the alignment was off with words overlapping other elements. Once again, good justification of design and styling choices. Some of the images it is unclear if they are clickable or not, it may be good to include hover states to show this. The "my plan" page is the only page that refers back to tracking, however you do not show how a user would track their exercises."

![This is the alt text](./public/readMeImages/mockUp1.png)


Therefore, I decided to improve my website. Firstly, I cancelled two other pages and rebuild my new pages, to make sure It can help user track their exercise clearly and use it without confused. my new website contains 5 part, and three part are used data model, one make responsive.


**HeroImages Part** this part I showed my brandElement "Fitness" and tell the user what our website can provide and how can we help them in our website.

![This is the alt text](./public/readMeImages/heroImage.png)

**Everyday Tips Part**
this part, I used responsive design in it. When user want to know more information like "Why warm-up Important" they can click the button. I used addEventListener in the script.js which can catch user active and provide detail below.

**1**
 ![This is the alt text](./public/readMeImages/EverydayTips1.png)
**2**
 ![This is the alt text](./public/readMeImages/EverydayTips2.png)

**Exercise form Part**
Now, we headed to the data model part, The user could write their data into the form and press the submit. All the data will occurs in the Today Plan Part. For Example I used the data "name: Jack, Weight : 80, Duration: 60, Type: Warm up, Strength: light." These Data will be remember in the local storage. Don't worry it will lose when fresh the page

**1**
![This is the alt text](./public/readMeImages/form1.png)
**2**
![This is the alt text](./public/readMeImages/TodayPlan1.png)


**Today Plan Part**
As I mentioned before, As user input the value in the exercise form and submit it. The today plan will generate one corrospond plan for user. It will give text and visual element and also tell user how many Claories they burned during exercise. User could delet it or add more from the Exercise Form or Exercise Suggest.

![This is the alt text](./public/readMeImages/TodayPlan2.png)

**Exercise Suggest**
The last part is exercise suggest, which contains 4 suggest card, if user like one of them, they can just clicked the "ADD" button, which will add this form into the Today Plan Part. They can use these Suggest Plan as their own plan.

**1**
![This is the alt text](./public/readMeImages/ExerciseSuggest1.png)

This is 3rd Suggest Plan card added into Today Plan Part

**2**
![This is the alt text](./public/readMeImages/ExerciseSuggest2.png)


# Strong emphasis on lesson learned and best practices
**Firstly** Before I wrote codes, I will draw mind-map in my ipad to make sure I get clearly thinking on how can I archieve this process and how to deal with it. 
**Moreover** I think the most important thing is to clear the code and make them easy to follow. I seperate my five part "heroImage", "Everday Tips", "Form", "Today Plan" and "Exercise Suggest" into 5 scss file. It save me lot of time to found every code, and know what they are quickly

# Outline of Application Configuration and deployment procedures.
1. You can write these to the terminal to finish setup and start working "npm run dev"

2. To view website write to the terminal "npm run dev"

3. If you want to see more setup I used, open package.json to view more detail

![This is the alt text](./public/readMeImages/packageJson.png)


4. I used Scss to store all the part. In modules part, I strore all the small functions. One is color.scss, the other one is mixins.scss. mixins.scss used to store the differnt grid function, I can import it as "@included" to quickly use it.

5. In partials part, It contains all my website part, like heroImage part css, TodayPlan part css. These are seperated, you can just view it very quickly.

6. if you create other scss file, remember to import all these new file in the main.scss

![This is the alt text](./public/readMeImages/scss1.png)


# FurtherImprovements or extensions
I think the futherImprovements should in the Exercise Suggest part, It can contained more functions.

1. Instead of user read all the content and choose one of them. Just add a function in the Script.js. User could just input their data in the exercise form, "Exercise Suggest" part will calculate the data in the scirpt.js and  auto changed title to "Suggest" or "Not Suggest". People can just quickly to read one of them that related to the exercise they chosed today and click it. Don't have to read all of them.

![This is the alt text](./public/readMeImages/ExerciseSuggest1.png)