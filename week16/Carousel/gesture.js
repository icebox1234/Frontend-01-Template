

// let element = document.body;

// enableGesture(element);

export function enableGesture(element) {
    let contexts = Object.create(null);

    let MOUSE_SYMBOL = Symbol('mouse')


    /**
     * @description listen mouse in the enviroment which is PC browser
     */

    if (document.body.ontouchstart !== null) {
        element.addEventListener('mousedown', (event) => {
            contexts[MOUSE_SYMBOL] = Object.create(null);

            start(event, contexts[MOUSE_SYMBOL]);

            let mosemove = (event) => {
                move(event, contexts[MOUSE_SYMBOL])
            }
            let mouseup = (event) => {
                end(event, contexts[MOUSE_SYMBOL]);

                document.removeEventListener('mousemove', mosemove);
                document.removeEventListener('mouseup', mouseup);
            }

            document.addEventListener('mousemove', mosemove);
            document.addEventListener('mouseup', mouseup);
        });
    }

    /**
     * @description lissten touch 
     */

    element.addEventListener('touchstart', (event) => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null);
            start(touch, contexts[touch.identifier]);
        }
    });

    element.addEventListener('touchmove', (event) => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null);
            move(touch, contexts[touch.identifier]);
        }
    });

    element.addEventListener('touchend', (event) => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null);
            end(touch, contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    });

    element.addEventListener('touchcancel', (event) => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null);
            cancel(touch, contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    });


    /**
     * @description 手势的分类 
     * 1.tap
     * 2.pan panstart panmove panend
     * 3.flick
     * 4.press pressstart pressend  
     */


    /**
     * @description abstract action
     */

    let start = (point, context) => {
        element.dispatchEvent(new CustomEvent('start', {
            detail: {
                startX: point.clientX,
                startY: point.clientY,
                clientX: point.clientX,
                clientY: point.clientY,
            }
        }));

        context.startX = point.clientX;
        context.startY = point.clientY;
        context.moves = [];
        context.isTap = true;
        context.isPan = false;
        context.isPress = false;

        context.timeHandler = setTimeout(() => {
            if (context.isPan) {
                return;
            }
            context.isPress = true;
            context.isTap = false;
            context.isPan = false;
            //pressstart
            element.dispatchEvent(new CustomEvent('pressstart'), {});
        }, 500);

    }

    let move = (point, context) => {
        let dx = point.clientX - context.startX;
        let dy = point.clientY - context.startY;

        if (dx ** 2 + dy ** 2 > 100 && !context.isPan) {
            if (context.isPress) {
                //presscancel
                element.dispatchEvent(new CustomEvent('presscancel'), {});
            }
            context.isPan = true;
            context.isTap = false;
            context.isPress = false;
            //panstart
            element.dispatchEvent(new CustomEvent('panstart', {
                detail: {
                    startX: context.startX,
                    startY: context.startY,
                    clientX: point.clientX,
                    clientY: point.clientY,
                }
            }));
        }


        if (context.isPan) {
            //pan

            //compute speed for flick

            /**
             * 左右滑动的计算可以考虑计算moves中的平均速度，然后根据最后一个clientX与startX
             * 比较来判定方向
             */
            context.moves.push({
                dx, dy,
                t: Date.now()
            })
            //只计算300毫秒以内的
            context.moves = context.moves.filter(record => Date.now() - record.t < 300);
            //可以放在第二个参数的detail内部
            let e = new CustomEvent('pan', {
                detail: {
                    startX: context.startX,
                    startY: context.startY,
                    clientX: point.clientX,
                    clientY: point.clientY
                }
            });
            element.dispatchEvent(e);
        }
    }

    let end = (point, context) => {
        if (context.isTap) {
            element.dispatchEvent(new CustomEvent('tap'), {});
        }
        if (context.isPan) {
            let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
            let record = context.moves[0];
            let speed = Math.sqrt((record.dx - dx) ** 2 + (record.dy - dy) ** 2) / (Date.now() - record.t);

            let isFlick = speed > 2.5;
            if (isFlick) {
                //flick
                element.dispatchEvent(new CustomEvent('flick', {
                    detail: {
                        startX: context.startX,
                        startY: context.startY,
                        clientX: point.clientX,
                        clientY: point.clientY,
                        speed: speed
                    }
                }));
            }
            element.dispatchEvent(new CustomEvent('panend', {
                detail: {
                    startX: context.startX,
                    startY: context.startY,
                    clientX: point.clientX,
                    clientY: point.clientY,
                    speed: speed,
                    isFlick: isFlick
                }
            }));
        }
        if (context.isPress) {
            element.dispatchEvent(new CustomEvent('pressend'), {});
        }

        clearTimeout(context.timeHandler);

    }

    let cancel = (point, context) => {
        element.dispatchEvent(new CustomEvent('cancel'), {});
        clearTimeout(context.timeHandler);
    }
}