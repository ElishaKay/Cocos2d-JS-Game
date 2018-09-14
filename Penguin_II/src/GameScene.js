/**
 * Created by yicha on 14-7-9.
 */

var GameLayer = cc.Layer.extend({
    size_height: null,
    size_width: null,
    backgroundLayer : null,
    pressTimer : null,
    menu_layer: null,
    bearSprite: null,
    penguinSprite: null,
    ctor:function () {
        this._super();
        var size = cc.director.getWinSize();
        this.size_height = size.height;
        this.size_width = size.width;
        // background
        this.backgroundLayer = new BackgroundLayer();
        this.backgroundLayer.tag = 100;
        this.backgroundLayer.init();
        // Bear
        this.bearSprite = new BearSprite();
        this.bearSprite.init();
        this.bearSprite.setPosition(this.size_width - 70, 105);
        this.bearSprite.tag = 1001;
        this.backgroundLayer.addChild(this.bearSprite, 1);
        this.backgroundLayer.bg_array.push(this.bearSprite);
        this.addChild(this.backgroundLayer, 0);
        //  Penguin
        this.penguinSprite = new PenguinSprite();
        this.penguinSprite.init(res.penguin_jump_2);
        this.penguinSprite.setPosition(this.size_width - 58, this.size_height - 45);
        this.penguinSprite.tag = 3001;
        var penguinLayer = cc.Layer.create();
        penguinLayer.tag = 300;
        penguinLayer.addChild(this.penguinSprite, 0);
        // Power size (progress bar)
        this.pressTimer = cc.ProgressTimer.create(cc.Sprite.create(res.button_bottom_pressed_2));
        this.pressTimer.setType(cc.ProgressTimer.TYPE_BAR);
        this.pressTimer.setBarChangeRate(cc.p(0, 1));  //  Vertical progress bar
        this.pressTimer.setMidpoint(cc.p(1, 0)); // Improvement
        this.pressTimer.setAnchorPoint(0, 0);
        this.pressTimer.setPosition(cc.p(10, 25));
        this.pressTimer.runAction(cc.RepeatForever.create(cc.ProgressTo.create(3, 100)));    // Reach 100% in 5 seconds, ie 20% per second
        this.pressTimer.tag = 3002;
        penguinLayer.addChild(this.pressTimer, 1);
        var pressTimerBottom = cc.Sprite.create(res.button_bottom_pressed_3);
        pressTimerBottom.setAnchorPoint(0, 0);
        pressTimerBottom.setPosition(10, 25);
        penguinLayer.addChild(pressTimerBottom, 1);
        this.addChild(penguinLayer, 2);
        cc.eventManager.addListener(TouchEventListener, this);
        return true;
    },
    displayMenu: function(score) {
        TOUCH_COUNT = 0;
        this.getChildByTag(300).getChildByTag(3002).stopAllActions();
        cc.eventManager.removeAllListeners();
        // Show menu after game is over
        score = score || 0;
        if(score > 0) {
//            dp_submitScore(0,score);
        }
        this.menu_layer = cc.Layer.create();
        this.menu_layer.tag = 400;
        var score_label = cc.LabelTTF.create("得分: " + score, "Arial", 20);
        score_label.setPosition(this.size_width/2, this.size_height/2 + 80);
        score_label.setColor(cc.color(39, 64, 139, 0));

        var more_sprite = cc.Sprite.create(res.button_more_game);
        var more_menuItem = cc.MenuItemSprite.create(more_sprite, null, null,this.click_moreGame, this);
        var retry_sprite = cc.Sprite.create(res.button_retry);
        var retry_menuItem = cc.MenuItemSprite.create(retry_sprite, null, null,this.click_retry, this);
        var menu = cc.Menu.create(more_menuItem, retry_menuItem);
        menu.alignItemsHorizontallyWithPadding(20);
        menu.attr({
           x : this.size_width / 2,
           y : this.size_height / 2
        });
        this.menu_layer.addChild(score_label, 0);
        this.menu_layer.addChild(menu, 0);
        this.addChild(this.menu_layer, 3);
    },
    click_moreGame: function() {
//        dp_Ranking("moregame");
    },
    click_retry: function() {
        this.menu_layer.setVisible(false);
        this.pressTimer.setPercentage(0);
        this.pressTimer.runAction(cc.RepeatForever.create(cc.ProgressTo.create(3, 100)));
        this.backgroundLayer.init();
        this.bearSprite.setPosition(this.size_width - 70, 105);
        this.bearSprite.init();
        this.backgroundLayer.addChild(this.bearSprite, 1);
        this.backgroundLayer.bg_array.push(this.bearSprite);
        this.penguinSprite.setPosition(this.size_width - 58, this.size_height - 45);
        this.penguinSprite.re_stand();
        cc.eventManager.addListener(TouchEventListener, this);
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});
