/*
 * @Author: yansixing
 * @Date: 2019-09-28 11:26:29
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2021-05-23 20:35:55
 */

import { _decorator, Component, Sprite, Material, Event, EventTouch, Node, UITransform, Vec3, Vec2 } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('WaterRipple')
@executeInEditMode
export default class WaterRipple extends Component {
    aspect: number = 2;
    radius: number = 0.6;
    life: number = 1.0;
    band: number = 0.3;
    amp: number = 0.3;
    waves: number = 12.0;
    speed: number = 2.0;
    img: Sprite | null = null;
    material: Material | undefined | null = null;
    time: number = 1;
    uiTransform: UITransform | undefined | null = null;
    onLoad() {

        this.node.on(Node.EventType.TOUCH_START, this.onTouchEnd, this);

        this.img = this.getComponent(Sprite);
        this.material = this.img?.sharedMaterial;

        this.uiTransform = this.img?.getComponent(UITransform);
        if (this.uiTransform) {
            this.aspect = this.uiTransform?.width / this.uiTransform?.height;
        }
        this.material?.setProperty('aspect', this.aspect);
        this.material?.setProperty('radius', this.radius);
        this.material?.setProperty('life', this.life);
        this.material?.setProperty('band', this.band);
        this.material?.setProperty('amp', this.amp);
        this.material?.setProperty('waves', this.waves);
        this.material?.setProperty('speed', this.speed);
        this.material?.setProperty('progress', 1.0);

        console.log(this.material);
    }
    onTouchEnd(evt: EventTouch) {
        let touch = evt.getUILocation();
        // let local = this.node.convertToNodeSpaceAR(touch);
        let local = this.uiTransform?.convertToNodeSpaceAR(new Vec3(touch.x, touch.y, 0));
        if (local && this.uiTransform) {
            let normalizedPos = new Vec2(local.x / this.uiTransform.width + 0.5, -(local.y / this.uiTransform.height - 0.5));
            this.material?.setProperty('center', normalizedPos);
            this.material?.setProperty('progress', 0.0);
        }
    }
    update(dt: number) {
        this.time += dt;
        this.material?.setProperty('u_time', this.time);
        let progress = this.material?.getProperty('progress');
        if (progress >= 1) {
            this.material?.setProperty('progress', -1);
        } else if (progress >= 0) {
            progress += dt / this.life;
            this.material?.setProperty('progress', progress);
        }
    }
}