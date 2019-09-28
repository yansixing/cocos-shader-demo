/*
 * @Author: yansixing
 * @Date: 2019-08-27 16:17:43
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2019-09-28 11:24:23
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class waterRipple extends cc.Component {

    @property(cc.SpriteFrame)
    map: cc.SpriteFrame = null;

    // @property
    bluramount: number = 0.03;

    img: cc.Sprite = null;
    material: cc.Material;
    time: number = 1;
    resolution = { x: 0.0, y: 0.0 };

    onLoad() {
        window.onblur = function () {
            cc.game.pause();
        }
        window.onfocus = function () {
            cc.game.resume();
        }

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        // if (CC_EDITOR) {
        //     setTimeout(() => {
        //         this.applyEffect();
        //     }, 1000);
        // } else {
        //     this.applyEffect();
        // }


        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);
        this.material.effect.setProperty('aspect', this.node.width / this.node.height);

        console.log(this.material);
    }

    applyEffect() {

    }

    onTouchEnd(evt: cc.Event.EventTouch) {
        let pos = evt.getLocation();
        let local = this.node.convertToNodeSpace(pos);
        let normalizedPos = { x: local.x / this.node.width, y: 1 - local.y / this.node.height };
        this.material.effect.setProperty('center', normalizedPos);

        this.time = 0;
    }


    update(dt: number) {
        this.time += dt;
        this.material.effect.setProperty('progress', this.time);
        // this.material.effect.setProperty('progress', 1);
    }


}
