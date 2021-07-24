## Challenge Eight README Generator

### Description
This week's challenge was to generate a custom README markdown file using only Javascript logic. This was accomplished through using Node.js and NPM Fs and Inquirer to prompt the user when the correct input, in this case node index, was written in the command line. The user's answers were then input into the README template in generateMarkdown.js using module.export in that file and require('./utils/generateMarkdown.js') in index.js.

### Screenshots
You invoke the program from the command line using the following line:
![README Screenshot One](./Develop/images/READMEScreenshotOne.png)

You will then be given a series of propts to fill out:
![README Screenshot Two](./Develop/images/READMEScreenshotTwo.png)

If the program was executed correctly, the following message will appear and the markdown file has been sucessfully generated!
![README Screenshot Three](./Develop/images/READMEScreenshotThree.png)

### Links
Github: [Link](https://github.com/LoganDufek/README-Generator)
YouTube Walkthrough: [Link](https://www.youtube.com/watch?v=rZJS7i_onVo)