/*
 * @Author: yansixing
 * @Date: 2019-09-28 11:26:29
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-07 15:06:41
 */

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class waterRipple extends cc.Component {

    aspect: number = 2;
    radius: number = 0.6;
    life: number = 1.0;
    band: number = 0.3;
    amp: number = 0.3;
    waves: number = 12.0;
    speed: number = 2.0;


    img: cc.Sprite = null;
    material: cc.Material;
    time: number = 1;

    onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);

        this.aspect = this.img.node.width / this.img.node.height;
        this.material.effect.setProperty('aspect', this.aspect);
        this.material.effect.setProperty('radius', this.radius);
        this.material.effect.setProperty('life', this.life);
        this.material.effect.setProperty('band', this.band);
        this.material.effect.setProperty('amp', this.amp);
        this.material.effect.setProperty('waves', this.waves);
        this.material.effect.setProperty('speed', this.speed);

        console.log(this.material);
    }

    onTouchEnd(evt: cc.Event.EventTouch) {
        let touch = evt.getLocation();
        let local = this.node.convertToNodeSpaceAR(touch);
        let normalizedPos = new cc.Vec2(local.x / this.node.width + 0.5, -(local.y / this.node.height - 0.5));
        this.material.effect.setProperty('center', normalizedPos);
        this.material.effect.setProperty('progress', 0.0);
    }


    update(dt: number) {
        this.time += dt;
        this.material.effect.setProperty('u_time', this.time);
        let progress = this.material.effect.getProperty('progress');
        if (progress >= 1) {
            this.material.effect.setProperty('progress', -1);
        } else if (progress >= 0) {
            progress += dt / this.life;
            this.material.effect.setProperty('progress', progress);
        }
    }


}
