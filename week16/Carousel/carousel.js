import { createElement, Text, Wrapper } from './createElement'
import { Timeline, Animation } from './animation'
import { enableGesture } from './gesture';
import { cubicBezier, ease } from './cubicBezier'


export class Carousel {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
    }

    setAttribute(name, value) { //attribute
        this[name] = value;
    }

    appendChild(child) {
        this.children.push(child);
    }

    render() {
        let timeline = new Timeline();
        timeline.start();
        let position = 0;

        let nextPicStopHandler = null;



        let children = this.data.map((url, currentPosition) => {

            let lastPosition = (currentPosition - 1 + this.data.length) % this.data.length;
            let nextPostion = (currentPosition + 1) % this.data.length;

            let offset = 0;

            let onStart = () => {
                timeline.pause();
                clearTimeout(nextPicStopHandler);

                let currentElement = children[currentPosition];

                let currentTransformValue = Number(currentElement.style.transform.match(/transform\(([\s\S]+)px\)/)[1]);
                offset = currentTransformValue + 500 * currentPosition;
            }

            let onPan = (event) => {
                let lastElement = children[lastPosition];
                let currentElement = children[currentPosition];
                let nextElement = children[nextPostion];

                let lastTransformValue = -500 - 500 * lastPosition + offset;
                let currentTransformValue = -500 * currentPosition + offset;
                let nextTransformValue = 500 - 500 * nextPostion + offset;

                let dx = event.clientX - event.startX;

                lastElement.style.transform = `translateX(${lastTransformValue + dx}px)`;
                currentElement.style.transform = `translateX(${currentTransformValue + dx}px)`;
                nextElement.style.transform = `translateX(${nextTransformValue + dx}px)`;
            }

            let onPanend = (event) => {
                let direction = 0;
                let dx = event.clientX - event.startX;
                if (dx + offset > 250) {
                    direction = 1;
                } else {
                    direction = -1;
                }

                timeline.reset();
                timeline.start();

                let lastElement = children[lastPosition];
                let currentElement = children[currentPosition];
                let nextElement = children[nextPostion];

                let lastAnimation = new Animation(
                    lastElement.style,
                    'transform',
                    -500 - 500 * lastPosition + offset + dx,
                    -500 - 500 * lastPosition + direction * 500,
                    500,
                    0,
                    ease,
                    v => `translateX(${v}px)`
                );

                let currentAnimation = new Animation(
                    currentElement.style,
                    'transform',
                    -500 * currentPosition + offset + dx,
                    -500 * currentPosition + direction * 500,
                    500,
                    0,
                    ease,
                    v => `translateX(${v}px)`
                );

                let nextAnimation = new Animation(
                    nextElement.style,
                    'transform',
                    500 - 500 * nextPostion + offset + dx,
                    500 - 500 * nextPostion + direction * 500,
                    500,
                    0,
                    ease,
                    v => `translateX(${v}px)`
                );

                timeline.add(lastAnimation);
                timeline.add(currentAnimation);
                timeline.add(nextAnimation);

                position = (position - direction + this.data.length) % this.data.length;

                nextPicStopHandler = setTimeout(nextPic, 3000);
            }

            let element = <img src={url} onStart={onStart} onPan={onPan} onPanend={onPanend} enableGesture={true} />
            element.style.transform = 'translateX(0px)'
            element.addEventListener('dragstart', event => event.preventDefault());
            return element;
        });

        let root = <div class="carousel">
            {children}
        </div>




        let nextPic = () => {
            let nextPosition = (position + 1) % this.data.length;

            let current = children[position];
            let next = children[nextPosition];

            // let ease = cubicBezier(.25, .1, .25, 1)

            let currentAnimation = new Animation(
                current.style,
                'transform',
                - 100 * position,
                -100 - 100 * position,
                500,
                0,
                ease,
                v => `translateX(${5 * v}%)`
            )

            let nextAnimation = new Animation(
                next.style,
                'transform',
                100 - 100 * nextPosition,
                -100 * nextPosition,
                500,
                0,
                ease,
                v => `translateX(${5 * v}%)`
            );

            timeline.add(currentAnimation);
            timeline.add(nextAnimation);



            position = nextPosition;

            nextPicStopHandler = setTimeout(nextPic, 3000);
        }
        //动画开关
        nextPicStopHandler = setTimeout(nextPic, 3000);

        return root;
    }

    mountTo(parent) {
        this.render().mountTo(parent)
    }


}
