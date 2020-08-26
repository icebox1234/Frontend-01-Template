import { createElement, Text, Wrapper } from './createElement'
// import { Carousel } from './carousel';
// import { Panel } from './Panel';
// import { ListView } from './list-view';




// let component = <Carousel data={[
//     "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
//     "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
//     "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
//     "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
// ]} />

// let pannel = <Panel title='this is my panel'>
//     <span>this is a panel</span>
// </Panel>

// let data = [
//     {
//         title: '蓝猫',
//         url: 'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg'
//     },
//     {
//         title: '橘猫加白',
//         url: 'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg'
//     },
//     {
//         title: '狸花加白',
//         url: 'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg'
//     },
//     {
//         title: '蓝猫',
//         url: 'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg'
//     }
// ]

// let list = <ListView data={data}>
//     {
//         record => (
//             <figure>
//                 <img src={record.url} />
//                 <figcaption>{record.title}</figcaption>
//             </figure>
//         )
//     }
// </ListView>

let element = <div>
    <span>hello yahaha</span>
</div>

element.mountTo(document.body);

// console.log(component);
