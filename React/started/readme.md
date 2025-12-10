## Introduction to React

DOM element use kore ui data update kora lagto. value change korle manually barbar ui update kora lagto. valiable renaming, funciton handling, code optimization more complex. jokhon application onek boro akare cinta kora hoto tokhon esob problem hoito, ar same category code barbar use kora lagto. ata facebook er moto comapy data handle, code handle korte khub himshim kheto, ejonno react er invention.

facebook, JQuery use korar por o barbar code change korata muskil chilo ejonno tader ekjon software engineer jordan walke first react.js er concept niye asen. Inspired by php component based frame whice name is XHP-JS. facebook er newsfeed e 2011 sale implement kora hoi. 2012 sale instagram e use kora hoi. ato popular howar por react.js k open source kore dei. react.js absolutely written by js.

react.js ejonno create kore jeno ui manually update kora na lage. automatically nije nije update hoi jeno. data change holeo automatic ui te react korbe. atai chilo main concept for react.

what is react and react dom?
react is a user interce library. user interface create korte help kore.

user interface create korte 2ta kaj kora lage:

1. dom create kora. render kora
2. user interaction handle kora (listen and respond) (finally website e render kore dewa)

react main dom e newar age virtual dom niye kaj kore, update and changes gula check kore final dom e send kore.

react html code direct render kore nah. babel er maddhome first e convert kore tarpor html e transfer kore. (babel-transpile)

`ctrl + shift + L for same word select`

react er component gula sob alada, same component render holeo tader state gula alada hoi. ekta component arekta component er upor kono effect fele nah.

### Virtual DOM

how dom works :
html --> html parser --> dom tree (DOM)
css --> css parser --> style fules (CSSOM)

    ```
    attachment (dom tree, style rules) -> render tree (layout) --> painting -->     display

    DOM manipulate korle actual dom tree abar rerender hoi. dom operation slow nah. ei painting process ta slow. all css, dom recalculate hoi ejonno painting process ta slow. mot kotha painting process slow howar karone dom k slow dhora hoi. tobe bujte parlam painting process ta slow.

    jokhon webpage er moddhe onek interactivity same time hoi tokhon khub slow hoiye jai. ejonno react k upolobdi kore. performance kharap, slow hoiye jaw website.

    egula solution 2ta way te hoite pare.
    ```

    What is the best we can do about?
    1. batch update
    2. 2. less dom operation

batch update process:

```
whilte(increment < 10000) {
    array.push(++increment);
}

container.innerHTML = array.join(' ');

eksathe operation kore ses e ekta dom er maddhome code run koraiche. eksathe esob kaj kore dom manipulate kora k batch update bole. code optimize and operation thik thakle dom operation slow nah.

sob operation ses kore dom er maddhome render kore.

virtual dom er khetre before and update change er sathe comparison kore change ta update kore actual dom e render kore.

virtual dom k raf khata hisebe dhora hoi.

react er component guli tree er moto.

react ffirst e ja kore. component tree er ekta replica create kore. tarpor changes option e giye comparison kore kon jaigai update hoice. ar ata hoi 'diffing algorithm' er maddhome. (Reconciliation). ata react develop koreche. ei algorithm er maddhoe khuje ber kore kon jaigai asole change ta hoiyece.

ses e change jaigai update kore virtual dom actual dom e send kore.
```

Is virtual dom is slow? (VDOM + DOM)
react 2ta dom niye kaj kore ejonno slow hoiye jawar kotha. kintu actual dom er painting process theke ektu efficient. ejonno (virtual + dom) Fast enough.

virtual dom er maddhome react sergically update kore. exact j jaigai change kora lge seta change kore. pura entire component k update kore nah. ata k sergically update bole.

<!-- react is popular for single page application -->

keno react use kora hoi other framework chara (like jQuery)

- developer experience
- maintability
- code suggestiong, tooling,
- component based (module)

Event handler function component to component pass korle onClick jeno na hoi.

naming convention: function name handle diye suru, handler guli on diye suru.

html e button and div click handler support kore.

Event Propagation: proparation mane move kora.
child listener k parent e delegate kore dewa k event delegation bole. delegation mane orpon kora.

event propagration er 1st part hocche event delegation.
2nd part hocche event bubble.

```
<button>
    <button>
        <button></button>
    </button>
</button>
```

ekhetrea j event trigger hobe setai age call hobe. ata k event bubble er concept bole.

event handler er moddhe capturing true dile upor theke nijer dike jabe. event buble er ulta, ata hocche event propagation.

1. event deletation
2. event capturing
3. event bubbling


bubble ⬆️
propagation ⬇️

onScroll event handler er khtre event propagation korbe nah. onno sob khetre korbe.


onScroll parent er upor na howai valo.

browser event trigger korle event object, react event trigger korle syntheticEvent object

e.stopPropagation() diye propagation stop kora jai. 

atai khub oi sensitive jinis, karon event handler gula jeno onno kono handler er upor effect felte na pare.


side effect 2vhabe handle kora jai.
* useEffect
* event handler
rendering er somoi kono side effect use kora jabe nah. handler er moddhe handle korte hobe.

** state change korle rerender hoi component

state is isolated and private.