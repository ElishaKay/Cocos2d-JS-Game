#Cocos2d-JS-Game

HTML5 game developed by Cocos2d-JS game engine (PS: These games are not original, it is the JS version of the original game)

## Penguin_II
Game description: When the penguin falls, the polar bear swings the baseball bat to hit the penguin. If it hits, the penguin will fly according to a certain movement law.

Finally, it will stop on the snow due to the resistance. Note that the progress bar on the left shows the strength of the polar bear's striking, which determines the speed at which the penguin flies out.

## JumpingGo
Game Description: This is a child-friendly game. It tests the coordination degree and reaction speed of the player's left and right brains and hands. It reminds me that the small squares on the left and right sides may need to jump at the same time. Pay attention to it. !

## WaterDropAttack
Game description: Water drops have four states. The change of state is changed by merging other water droplets. However, if the state four is merged with other small water droplets, it will explode. After the explosion, the water droplets and other water droplets will explode. Fusion, changing its state, the game's requirement is to eliminate all water droplets within a limited number of water droplets!

## FindYourSister
Game description: JS version of the classic mobile game "Looking for your sister", the gameplay is the same as the App version, that is, find something that meets the task requirements.

## HappyEliminate
Game description: This is a three-disc game, the JS version of "Happy Fun", which has completed the main logic of the three-game, and achieved the effect of straight-line elimination.

How To Run on Local Machine:

Step 1:

Watched the first 4 minutes of this video - how to download Cocos for Linux:

Building Cocos2d-x 3.7 in Ubuntu

https://www.youtube.com/watch?v=gwDdUspNMvg&list=LLJ39jPaNwEeqQbDCDNZJNBA&index=4&t=92s

Step 2:

You can choose where to extract your zipped Cocos Folder. Create a 'projects' folder within the Cocos package. Then, paste the 5 games in this repo into your 'projects' folder.

Step 3:

Within your Command Line, cd into the folder of each game, and run:

```
cocos run -p web
```

Shablam, the browser will automatically open up the game within your Web Browser! Note: the games work on web for me because I have a touch-screen laptop. To run these games on Android, you will need the NDK.

More on that here: 

https://developer.android.com/ndk/downloads/

You will also need to specify for Cocos where your NDK is located.