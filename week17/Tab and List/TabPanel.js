// import { createElement, Text, Wrapper } from './createElement'
// import { Timeline, Animation } from './animation'
// import { enableGesture } from './gesture';
// import { cubicBezier, ease } from './cubicBezier'


// export class TabPanel {
//     constructor(config) {
//         this.children = [];
//         this.attributes = new Map();
//         this.properties = new Map();
//     }

//     setAttribute(name, value) { //attribute
//         this[name] = value;
//     }

//     appendChild(child) {
//         this.children.push(child);
//     }

//     select(i) {
//         for (let view of this.childrenViews) {
//             view.style.display = 'none';
//         }
//         this.childrenViews[i].style.display = '';
//         this.titleView.innerText = this.children[i].title;
//     }

//     render() {
//         this.childrenViews = this.children.map(child => {
//             return <div>{child}</div>
//         })
//         this.titleView = <div>title</div>

//         return <div class='panel'>
//             <h1>{this.title}</h1>
//             <div>
//                 {this.children.map(child => {
//                     return <div>{child}</div>
//                 })}
//             </div>
//         </div>
//     }

//     mountTo(parent) {
//         this.render().mountTo(parent)
//     }


// }



import { createElement, Text, Wrapper } from './createElement'
import { Timeline, Animation } from './animation'
import { enableGesture } from './gesture';
import { cubicBezier, ease } from './cubicBezier'
import { ResolvePlugin } from 'webpack';


export class TabPanel {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
        this.state = Object.create(null);
    }

    setAttribute(name, value) { //attribute
        this[name] = value;
    }

    gettAttribute(name) { //attribute
        return this[name];
    }

    appendChild(child) {
        this.children.push(child);
    }

    select(i) {
        for (let view of this.childrenViews) {
            view.style.display = 'none';
        }
        this.childrenViews[i].style.display = '';

        for (let view of this.titleViews) {
            view.classList.remove('selected')
        }
        this.titleViews[i].classList.add('selected');
        // this.titleView.innerText = this.children[i].title;
    }

    render() {
        this.childrenViews = this.children.map(child => {
            return <div style="width:300px;min-height:300px">{child}</div>
        });
        this.titleViews = this.children.map((child, i) => {
            return <span onClick={() => this.select(i)}
                style="
                width:300px;
                min-height:300px;
                background-color:lightgreen;
                padding:5px 5px 0px 5px;
                font-size:24px 
                ">
                {child.gettAttribute('title') || ' '}
            </span>
        });

        let timer = setTimeout(() => {
            this.select(0);
            clearTimeout(timer);
        }, 16);


        return <div class='tab-panel' style="border:1px solid lightgreen;width:300px">
            <h1 style="width:300px;margin:0">{this.title}</h1>
            <div style="border:solid 1px lightgreen">
                {this.childrenViews}
            </div>
        </div>
    }

    mountTo(parent) {
        this.render().mountTo(parent)
    }


}

