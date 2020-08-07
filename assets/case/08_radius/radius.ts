/*
 * @Author: yansixing
 * @Date: 2019-09-28 11:26:29
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-07 15:11:52
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class radius extends cc.Component {

    @property
    radius: number = 0.1;


    img: cc.Sprite = null;
    material: cc.Material;
    time: number = 1;
    resolution = { x: 0.0, y: 0.0 };

    onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);
        // this.material.effect.setProperty('u_edge', this.radius);

        console.log(this.material);
    }

    applyEffect() {

    }

    getProperty_(name: string) {
        return this.material['_effect']['_properties'][name];
    }

    onTouchEnd(evt: cc.Event.EventTouch) {
        // let pos = evt.getLocation();
        // let local = this.node.convertToNodeSpace(pos);
        // let normalizedPos = { x: local.x / this.node.width, y: 1 - local.y / this.node.height };
        // this.material.effect.setProperty('center', normalizedPos);

        // this.time = 0;

        let pos = evt.getLocation();
        let local = this.node.convertToNodeSpace(pos);
        let normalizedPos = { x: local.x / this.node.width, y: 1 - local.y / this.node.height };
        // for (let index = 0; index < 4; index += 1) {
        //     if (uniforms.progress.value[index] === -1) {
        //         uniforms.progress.value[index] = 0;
        //         uniforms.centres.value[index] = normalizedPos;
        //         break;
        //     }
        // }
    }


    update(dt: number) {
        this.time += dt;
        // this.material.effect.setProperty('progress', this.time);
        // this.material.effect.setProperty('progress', 1);

        // for (let index = 0; index < 4; index += 1) {
        //     const progress = uniforms.progress.value[index];
        //     if (progress >= 1) {
        //         uniforms.progress.value[index] = -1;
        //     } else if (progress >= 0) {
        //         uniforms.progress.value[index] += diff / (this.props.life * 1000);
        //     }
        // }
    }


}
