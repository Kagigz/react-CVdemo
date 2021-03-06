# Computer Vision demo

This ReactJS web app is a demo of the [Azure Computer Vision API](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) and [Custom Vision service](https://www.customvision.ai/).

![Screenshot of the web app](screenshot_cvdemo.jpg)

## How to use

### Create a Computer Vision Resource

- Log into the [Azure portal](https://ms.portal.azure.com)
- Click on *Create a Resource*
- Search for **Computer Vision** and click on *Create*
- Follow the prompts to select a name, region, resource group for your resource
- Once your resource is created, go to the newly created resource and grab one of your subscription keys (*Keys* panel) (save it for later)

### Create a Custom Vision Project

- In the Azure portal, click on *Create a Resource*
- Search for **Custom Vision** and click on *Create*
- Follow the prompts to select a name, region, resource group for your resource
- Once your resource is created, go to the newly created Prediction resource and grab one of your prediction keys (*Keys* panel) (save it for later)
- Go to the [Custom Vision portal](https://www.customvision.ai/) and sign in
- Create a new General Classification Project (using the Custom Vision Resource created above)
- Import images and tag them
- Click on *Train* to train the service to recognize your images
- Click on *Quick Test* to check if you're satisfied with the results

### Set up the project

- Download or clone this repo
- Run `yarn` or `npm install` to restore dependencies
- Create a **.env** file at the root of the project that looks like this:
```
REACT_APP_COMPUTER_VISION_KEY="<YOUR COMPUTER VISION SUBSCRIPTION KEY>"
REACT_APP_COMPUTER_VISION_REGION="<YOUR COMPUTER VISION REGION>"
REACT_APP_CUSTOM_VISION_KEY="<YOUR CUSTOM VISION PREDICTION KEY>"
REACT_APP_CUSTOM_VISION_REGION="<YOUR CUSTOM VISION REGION>"
REACT_APP_CUSTOM_VISION_PROJECTID="<YOUR CUSTOM VISION PROJECT ID>"
```
Replace the values with your own subscription and prediction keys as well as the regions you selected when you created the resources. Your Custom Vision Project ID can be found in the settings panel of your project in the Custom Vision portal.
- run `yarn start` or `npm start` to start the project

### Test

#### Computer Vision API

Take the URL of any image on the web (you can go to Google Images and do a right click > Copy Image URL) and paste it in the URL field, then click on OK.
If there were no errors (which can occur when the size of the image is too big for instance), the results will appear in the *Info* panel within a few seconds.

#### Custom Vision Service

If you've used the training images provided in this repo, you can test your custom vision model using the following images, which were not used for training: 
- Kfet4: https://i.imgur.com/RuN1ETS.jpg
- Kfet5: https://i.imgur.com/uTAGS71.jpg
- Kfet6: https://i.imgur.com/zjhD9ot.jpg
- Kfet7: https://i.imgur.com/LpJFxdB.jpg
