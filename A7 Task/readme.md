Parsing: 
    Browser read html document is called parsing:

Tokenization: 
    After reading html document browser break down html document into small pices or tokens is called as tokenization. 
    eg. <h1>Hello, I am Vaibhav</h1>
        {
            tag: h1,
            textContent: Hello, I am Vaibhav
        }

DOM Tree: 
    Dom is a document object model. HTML document read the browser and parse into the tokens after it's convert into DOM tree. The tree like structure of html document is called as DOM tree.

CSSOM Tree: 
    CSSOM tree is a tree like structure of css rules. Css file read the browser and convert into CSSOM tree.
    eg. body {
            background-color: orange;
            color: white;
        }

    CSSOM tree: {
                    selector: body,
                    property: bgColor,
                    value: orange,
                    property: color,
                    value: white
                }

Render Tree:
    It's a combinition of DOM tree and CSSOM tree. It's store the data only that actully show on the screen. 
    eg. DOM Tree: {
                    tag: body,
                    textContent: Hello, word
                  }
        CSSOM Tree:  {
                        selector: body,
                        property: display,
                        value: none
                     }
        Render tree: {
                        tag: body, 
                        textContent: Hello, word
                     }

Event Bubbling:
            When event trigred then, event travel from top to bottom and reach on the target then first target will fired then start event bubbling from buttom/target to top. By defautl event bubbling is enable. 
            eg. html:  <div class="grandparent">
                            <div class="parent">
                                <div class="child"></div>
                            </div>
                        </div>

                Js:     let grand = document.querySelector(".grandparent");
                        let parent = document.querySelector(".parent");
                        let child = document.querySelector(".child");

                        grand.addEventListener("click", () => {
                            console.log("Grandparent");
                        })
                        parent.addEventListener("click", () => {
                            console.log("Parent");
                        })
                        child.addEventListener("click", () => {
                            console.log("Child");
                        })

                Output: Child
                        Parent
                        Grandparent


Event Capturing:
            Event capturing travel from top to bottom, by default it's false.
            eg.  html:  <div class="grandparent">
                            <div class="parent">
                                <div class="child"></div>
                            </div>
                        </div>

                Js:     let grand = document.querySelector(".grandparent");
                        let parent = document.querySelector(".parent");
                        let child = document.querySelector(".child");

                        grand.addEventListener("click", () => {
                            console.log("Grandparent");
                        }, {capture: true});
                        parent.addEventListener("click", () => {
                            console.log("Parent");
                        }, {capture: true});
                        child.addEventListener("click", () => {
                            console.log("Child");
                        }, {capture: true});

                Output: Grandparent
                        Parent
                        Child


Event Delegation:
        It's is process of add one event listener to the parent, and target all child of the parent using target.
        eg.     html:  <div class="grandparent">
                            <div class="parent">
                                <div class="child"></div>
                            </div>
                        </div>

                Js:     let grand = document.querySelector(".grandparent");

                        grand.addEventListener("click", (e) => {
                            console.log(e.target.className);
                        })

                Output: only print that div we click, like we clicked parent div so parent is a output. 