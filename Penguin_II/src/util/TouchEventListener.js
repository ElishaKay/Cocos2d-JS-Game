/**
 * Created by yicha on 14-7-10.
 */
var TOUCH_COUNT = 0;    // The number of clicks
var TouchEventListener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: false,                       // Set whether to engulf events, engulf when the onTouchBegan method returns true
    onTouchBegan: function (touch, event) {     // Implement the onTouchBegan event callback function
        return true;
    },
    onTouchEnded: function (touch, event) {         // Click event end processing
        TOUCH_COUNT++;
        var target = event.getCurrentTarget();
        // The first click, the progress bar stops refreshing, the penguin falls freely; the second click, the bear swing
        if(TOUCH_COUNT == 1) {
            var penguinLayer = target.getChildByTag(300);
            var penguinSprite = penguinLayer.getChildByTag(3001);
            penguinSprite.playFreeFall();

            var backgroundLayer = target.getChildByTag(100);
            var bearSprite = backgroundLayer.getChildByTag(1001);
            bearSprite.readyBaseBall();
        }
        if(TOUCH_COUNT == 2) {
            var backgroundLayer = target.getChildByTag(100);
            var bearSprite = backgroundLayer.getChildByTag(1001);
            var penguinLayer = target.getChildByTag(300);
            var pressTimer = penguinLayer.getChildByTag(3002);
            pressTimer.stopAllActions();
            var penguinSprite = penguinLayer.getChildByTag(3001);
            bearSprite.playBaseBall(penguinSprite, pressTimer.getPercentage());
        }
    }
});