        // let max = base * (1 + range);
    // export function numberOfOccurencesInArr(names: any[]) {
    // 	let countedNames = names.reduce(function (allNames, name) {
    // 		if (name in allNames) {
    // 			allNames[name + ""]++;
    // 		}
    // 		else {
    // 			allNames[name + ""] = 1;
    // 		}
    // 		return allNames;
    // 	}, {});
    // 	return countedNames;
    // }
    // export function randomInArr<T>(arr: T[], weightArr?: number[]) {
    // 	return arr[randomInt(0, arr.length)];
    // }
    // export function loadPrefab(url: string) {
    // 	return new Promise<cc.Prefab>(resolve => {
    // 		cc.loader2.loadRes(url, cc.Asset, (e, res: cc.Prefab) => {
    // 			resolve(res);
    // 		});
    // 	})
    // }
    // export function getOrLoadPrefab(url: string) {
    // 	return new Promise<cc.Prefab>(resolve => {
    // 		let ret = cc.loader2.getRes(url);
    // 		if (ret) {
    // 			resolve(ret);
    // 		} else {
    // 			cc.loader2.loadRes(url, cc.Asset, (e, res: cc.Prefab) => {
    // 				resolve(res);
    // 			});
    // 		}
    // 	})
    // }
    // export function getOrLoadRes(url: string) {
    // 	return new Promise(resolve => {
    // 		let ret = cc.loader2.getRes(url);
    // 		if (ret) {
    // 			resolve(ret);
    // 		} else {
    // 			cc.loader2.loadRes(url, cc.Asset, (e, res) => {
    // 				resolve(res);
    // 			});
    // 		}
    // 	})
    // }
    // export function getOrLoadTexture(url: string, callback: (tex: cc.Texture2D) => void) {
    // 	let tex = cc.loader2.getRes(url) as cc.Texture2D
    // 	if (tex) {
    // 		callback(tex);
    // 		return;
    // 	}
    // 	cc.loader2.loadRes(url, cc.Asset, undefined, (e: Error, tex: cc.Texture2D) => {
    // 		callback(tex);
    // 	});
    // }

import { _decorator, loader, Asset, rencesInArr, Vec2, log, Prefab } from 'cc';
export namespace Utils {
    export function getOrLoadRes(url: string) {
        return new Promise(resolve => {
            let ret = loader.getRes(url);
            if (ret) {
                resolve(ret);
            } else {
                cc.loader.loadRes(url, Asset, (e, res) => {
                    resolve(res);
                });
            }
        })
    }
    export function getRandomInRange(base: number, range: number) {
        let min = base * (1 - range);
        return min + Math.random() * base * range * 2;
    }
    export function posOfOrencesInArr(names: any[]): { [k: string]: number[] } {
        let countedNames = names.reduce(function (allNames, name, index) {
            if (name in allNames) {
                allNames[name + ""].push(index);
            }
            else {
                allNames[name + ""] = [index];
            }
            return allNames;
        }, {});
        return countedNames;
    }
    export function angleToNormalizeVec(angle: number): Vec2 {
        let vec = new Vec2();
        let arc = angle * Math.PI / 180;
        vec.x = Math.cos(arc);
        vec.y = Math.sin(arc);
        return vec;
    }
    export function swapTwoInArr(index1: number, index2: number, arr: any[]) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
        return arr;
    }
    export function clamp(v: number, min: number, max: number) {
        return v > max ? max : v < min ? min : v
    }
    export function lerp(v: number, from: number, to: number) {
        return from + (to - from) * v;
    }
    export function mod(v: number, m: number) {
        while (v < 0) v += m;
        return v % m;
    }
    export function randomInt(min: number, max: number) {
        return (Math.random() * (max - min) | 0) + min;
    }
    export function randomRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
    export function randomInArr<T>(arr: T[], weightArr?: number[]) {
        if (!weightArr) {
            return arr[randomInt(0, arr.length)];
        } else {
            if (arr.length !== weightArr.length) {
                console.log("Unequal length!");
                return;
            }
            let item;
            let sum = 0;
            weightArr.forEach(function (value) {
                sum += value;
            })
            let randomFloat = Math.random() * sum;
            sum = 0;
            for (let i = 0; i < weightArr.length; i++) {
                sum += weightArr[i];
                if (randomFloat < sum) {
                    item = arr[i];
                    break;
                }
            }
            return item;
        }
    }
    export function randomTwoInArr<T>(arr: T[]) {
        let arr2 = makeArrayRandom(arr);
        return arr2.slice(0, 2);
    }
    export function makeArrayRandom<T>(arr: T[]) {
        for (let i = 0; i < arr.length; ++i) {
            let j = (arr.length * Math.random()) | 0;
            if (i != j)
                [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    export function isInRange(v: number, min: number, max: number) {
        return v >= min && v <= max;
    }
    export function setColorMatrix(colorMatrix: number[], hex: number) {
        let result = Utils.hexToRGB(hex);
        colorMatrix[0] = result.r / 255;
        colorMatrix[6] = result.g / 255;
        colorMatrix[12] = result.b / 255;
        return colorMatrix;
    }
    export function newColorMatrix(hex: number) {
        let c = Utils.hexToRGB(hex);
        return [
            c.r / 255, 0, 0, 0, 0,
            0, c.g / 255, 0, 0, 0,
            0, 0, c.b / 255, 0, 0,
            0, 0, 0, 1, 0,
        ];
    }
    export function hexToRGB(hex: number) {
        return {
            b: hex & 0xff,
            g: hex >> 8 & 0xff,
            r: hex >> 16 & 0xff
        }
    }
    export function pad(num: number, n: number) {
        return (Array(n).join("0") + num).slice(-n);
    }
    export function arrayToSet<T>(arr: T[]) {
        let set: T[] = [];
        for (let i = 0; i < arr.length; ++i) {
            set.includes(arr[i]) || set.push(arr[i]);
        }
        return set;
    }
    export function getMaxInArray(arr: number[]) {
        let max = NaN;
        for (let i = 0; i < arr.length; ++i) {
            if (isNaN(max) || arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    export function randomItemsFromArray<T>(amount: number, arr: T[]) {
        return makeArrayRandom(arr.concat()).slice(0, amount)
    }
    export const deepClone = obj => JSON.parse(JSON.stringify(obj));
    export function wait(duration, callBack?) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (callBack) callBack();
                resolve();
            }, duration)
        });
    }
    export function callLater(callback: () => void, time = 0) {
        setTimeout(callback, time)
    }
    export function removeByValue(arr: any[], val: any) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    let _log = log;
    export function removeLog() {
        if (Context.isFB) {
            log = () => { };
        }
    }
    export function recoverLog() {
        if (Context.isFB) {
            log = _log;
        }
    }
    export function formatHMS(v: number) {
        if (v < 0) return;
        let h = Math.floor(v / 3600) + "";
        let m = Math.floor((v % 3600) / 60) + "";
        let s = Math.floor(v % 60) + "";
        return [h, m, s].map(str => str.length < 2 ? "0" + str : str).join(":");
    }
    export function formatMS(v: number) {
        if (v < 0) return;
        let m = Math.floor((v % 3600) / 60) + "";
        let s = Math.floor((v % 3600) % 60) + "";
        return [m, s].map(str => str.length < 2 ? "0" + str : str).join(":");
    }
    export function loadPrefab(url: string) {
        return new Promise<Prefab>(resolve => {
            cc.loader.loadRes(url, cc.Asset, (e, res: Prefab) => {
                resolve(res);
            });
        })
    }
    export function getRandomName() {
        let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let ret: string[] = [];
        for (let i = 0; i < 8; ++i) {
            ret.push(randomInArr(arr));
        }
        return "Gardener_" + ret.join("");
    }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// export namespace Utils {
// 
//     export function getOrLoadRes(url: string) {
//         return new Promise(resolve => {
//             let ret = cc.loader.getRes(url);
//             if (ret) {
//                 resolve(ret);
//             } else {
//                 cc.loader.loadRes(url, cc.Asset, (e, res) => {
//                     resolve(res);
//                 });
//             }
//         })
//     }
// 
//     export function getRandomInRange(base: number, range: number) {
//         let min = base * (1 - range);
//         // let max = base * (1 + range);
//         return min + Math.random() * base * range * 2;
//     }
// 
//     // export function numberOfOccurencesInArr(names: any[]) {
//     // 	let countedNames = names.reduce(function (allNames, name) {
//     // 		if (name in allNames) {
//     // 			allNames[name + ""]++;
//     // 		}
//     // 		else {
//     // 			allNames[name + ""] = 1;
//     // 		}
//     // 		return allNames;
//     // 	}, {});
//     // 	return countedNames;
//     // }
// 
//     export function posOfOccurencesInArr(names: any[]): { [k: string]: number[] } {
//         let countedNames = names.reduce(function (allNames, name, index) {
//             if (name in allNames) {
//                 allNames[name + ""].push(index);
//             }
//             else {
//                 allNames[name + ""] = [index];
//             }
//             return allNames;
//         }, {});
//         return countedNames;
//     }
//     export function angleToNormalizeVec(angle: number): cc.Vec2 {
//         let vec = new cc.Vec2();
//         let arc = angle * Math.PI / 180;
//         vec.x = Math.cos(arc);
//         vec.y = Math.sin(arc);
//         return vec;
//     }
// 
//     export function swapTwoInArr(index1: number, index2: number, arr: any[]) {
//         [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//         return arr;
//     }
// 
//     export function clamp(v: number, min: number, max: number) {
//         return v > max ? max : v < min ? min : v
//     }
// 
//     export function lerp(v: number, from: number, to: number) {
//         return from + (to - from) * v;
//     }
// 
//     export function mod(v: number, m: number) {
//         while (v < 0) v += m;
//         return v % m;
//     }
// 
//     export function randomInt(min: number, max: number) {
//         return (Math.random() * (max - min) | 0) + min;
//     }
// 
//     export function randomRange(min: number, max: number) {
//         return Math.random() * (max - min) + min;
//     }
// 
//     // export function randomInArr<T>(arr: T[], weightArr?: number[]) {
//     // 	return arr[randomInt(0, arr.length)];
//     // }
//     export function randomInArr<T>(arr: T[], weightArr?: number[]) {
//         if (!weightArr) {
//             return arr[randomInt(0, arr.length)];
//         } else {
//             if (arr.length !== weightArr.length) {
//                 console.log("Unequal length!");
//                 return;
//             }
//             let item;
//             let sum = 0;
//             weightArr.forEach(function (value) {
//                 sum += value;
//             })
//             let randomFloat = Math.random() * sum;
//             sum = 0;
//             for (let i = 0; i < weightArr.length; i++) {
//                 sum += weightArr[i];
//                 if (randomFloat < sum) {
//                     item = arr[i];
//                     break;
//                 }
//             }
//             return item;
//         }
//     }
// 
//     export function randomTwoInArr<T>(arr: T[]) {
//         let arr2 = makeArrayRandom(arr);
//         return arr2.slice(0, 2);
//     }
// 
//     export function makeArrayRandom<T>(arr: T[]) {
//         for (let i = 0; i < arr.length; ++i) {
//             let j = (arr.length * Math.random()) | 0;
//             if (i != j)
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//         return arr;
//     }
// 
//     export function isInRange(v: number, min: number, max: number) {
//         return v >= min && v <= max;
//     }
// 
//     export function setColorMatrix(colorMatrix: number[], hex: number) {
//         let result = Utils.hexToRGB(hex);
//         colorMatrix[0] = result.r / 255;
//         colorMatrix[6] = result.g / 255;
//         colorMatrix[12] = result.b / 255;
//         return colorMatrix;
//     }
// 
//     export function newColorMatrix(hex: number) {
//         let c = Utils.hexToRGB(hex);
//         return [
//             c.r / 255, 0, 0, 0, 0,
//             0, c.g / 255, 0, 0, 0,
//             0, 0, c.b / 255, 0, 0,
//             0, 0, 0, 1, 0,
//         ];
//     }
// 
//     export function hexToRGB(hex: number) {
//         return {
//             b: hex & 0xff,
//             g: hex >> 8 & 0xff,
//             r: hex >> 16 & 0xff
//         }
//     }
// 
//     export function pad(num: number, n: number) {
//         return (Array(n).join("0") + num).slice(-n);
//     }
// 
//     export function arrayToSet<T>(arr: T[]) {
//         let set: T[] = [];
//         for (let i = 0; i < arr.length; ++i) {
//             set.includes(arr[i]) || set.push(arr[i]);
//         }
//         return set;
//     }
// 
//     export function getMaxInArray(arr: number[]) {
//         let max = NaN;
//         for (let i = 0; i < arr.length; ++i) {
//             if (isNaN(max) || arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//         return max;
//     }
// 
//     // export function loadPrefab(url: string) {
//     // 	return new Promise<cc.Prefab>(resolve => {
//     // 		cc.loader2.loadRes(url, cc.Asset, (e, res: cc.Prefab) => {
//     // 			resolve(res);
//     // 		});
//     // 	})
//     // }
// 
//     // export function getOrLoadPrefab(url: string) {
//     // 	return new Promise<cc.Prefab>(resolve => {
//     // 		let ret = cc.loader2.getRes(url);
//     // 		if (ret) {
//     // 			resolve(ret);
//     // 		} else {
//     // 			cc.loader2.loadRes(url, cc.Asset, (e, res: cc.Prefab) => {
//     // 				resolve(res);
//     // 			});
//     // 		}
//     // 	})
//     // }
// 
//     // export function getOrLoadRes(url: string) {
//     // 	return new Promise(resolve => {
//     // 		let ret = cc.loader2.getRes(url);
//     // 		if (ret) {
//     // 			resolve(ret);
//     // 		} else {
//     // 			cc.loader2.loadRes(url, cc.Asset, (e, res) => {
//     // 				resolve(res);
//     // 			});
//     // 		}
//     // 	})
//     // }
// 
//     export function randomItemsFromArray<T>(amount: number, arr: T[]) {
//         return makeArrayRandom(arr.concat()).slice(0, amount)
//     }
// 
//     export const deepClone = obj => JSON.parse(JSON.stringify(obj));
// 
//     export function wait(duration, callBack?) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (callBack) callBack();
//                 resolve();
//             }, duration)
//         });
//     }
// 
//     export function callLater(callback: () => void, time = 0) {
//         setTimeout(callback, time)
//     }
// 
//     export function removeByValue(arr: any[], val: any) {
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] == val) {
//                 arr.splice(i, 1);
//                 break;
//             }
//         }
//     }
// 
//     let _log = cc.log;
//     export function removeLog() {
//         if (Context.isFB) {
//             cc.log = () => { };
//         }
//     }
//     export function recoverLog() {
//         if (Context.isFB) {
//             cc.log = _log;
//         }
//     }
// 
//     export function formatHMS(v: number) {
//         if (v < 0) return;
//         let h = Math.floor(v / 3600) + "";
//         let m = Math.floor((v % 3600) / 60) + "";
//         let s = Math.floor(v % 60) + "";
//         return [h, m, s].map(str => str.length < 2 ? "0" + str : str).join(":");
//     }
// 
//     export function formatMS(v: number) {
//         if (v < 0) return;
//         let m = Math.floor((v % 3600) / 60) + "";
//         let s = Math.floor((v % 3600) % 60) + "";
//         return [m, s].map(str => str.length < 2 ? "0" + str : str).join(":");
//     }
// 
//     export function loadPrefab(url: string) {
//         return new Promise<cc.Prefab>(resolve => {
//             cc.loader.loadRes(url, cc.Asset, (e, res: cc.Prefab) => {
//                 resolve(res);
//             });
//         })
//     }
// 
//     // export function getOrLoadTexture(url: string, callback: (tex: cc.Texture2D) => void) {
//     // 	let tex = cc.loader2.getRes(url) as cc.Texture2D
//     // 	if (tex) {
//     // 		callback(tex);
//     // 		return;
//     // 	}
//     // 	cc.loader2.loadRes(url, cc.Asset, undefined, (e: Error, tex: cc.Texture2D) => {
//     // 		callback(tex);
//     // 	});
//     // }
// 
//     export function getRandomName() {
//         let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//         let ret: string[] = [];
//         for (let i = 0; i < 8; ++i) {
//             ret.push(randomInArr(arr));
//         }
//         return "Gardener_" + ret.join("");
//     }
// }
