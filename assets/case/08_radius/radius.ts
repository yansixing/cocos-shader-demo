/*
 * @Author: yansixing
 * @Date: 2019-09-28 11:26:29
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-08 16:07:55
 */

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class radius extends cc.Component {

    @property
    radius: number = 0.2;


    img: cc.Sprite = null;
    material: cc.Material;
    time: number = 1;
    resolution = { x: 0.0, y: 0.0 };

    onLoad() {

        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);
        this.material.effect.setProperty('u_edge', this.radius);

        console.log(this.material);
    }
]


    update(dt: number) {
        // this.time += dt;
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
