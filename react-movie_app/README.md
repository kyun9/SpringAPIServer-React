# React JS로 영화 웹 서비스만들기

>  노마드코더 클론코딩

### Why React

* 페이스북이 만듬 - 에어비엔비, npm, 넷플릭스, 스포티파이, slack 등등.. 
* 프로트엔드 개발에서 64%가 React가 사용하고 있음
* 자바스크립트로 이루어져 있기 때문에 따로 공부할 필요 없이 자바스크립트 개발자로 될 수 있음
* 엘레강스, 패키지 종류가 많아서, 문서가 잘 정리되어있어서, 빨라서등  이유는 많아
  * 가장 큰 이유는 유명하고 사람들이 좋아하고, 큰 회사들이 리액트를 쓰고 있어서야



```bash
# 리엑트 app 생성
npx create-react-app {프로젝트이름}

# 리엑트 실행  - localhost 유지하고 refresh됨
npm start
```



### How does React work?

* react는 내가 쓰는 모든 요소를 생성한다는 것임

* 자바스크립트와 함께 그것들을 만들고 HTML로 밀어 넣는 것
*  모든 react application을 div 사이에 넣는다.
* index.js에 reactDom.render을 통해 document.getElementById에 많는 id에 render을 한다.
  * App.js에 있는 컴포넌트 내용을.. render한다.

##### 빠른이유

> react는 소스 코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고 있어서..

1. 빈 HTML을 load함
2. react가 HTML을 밀어넣음 (component들을.. (app.js와 같은))
   * virtual DOM(virtual Document Object Model)
     * 소스코드에는 존재하지 않는 것을 의미 (react가 이것을 만들어주는 거임)  ---> (brower에서 마우스 오른쪽 클릭하고 [소스보기]를 하면 *소스코드 내용*이 보이지 않는다.) == **react가 빠른 이유지!!!(virtual이고 존재하지 않으니까)**

* public

  * **index.html** 

    ```html
    <div id ="root">
    	/* {모든 react application을 넣는다.} */
    </div>
    ```

* src

  * index.js

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    
    ReactDOM.render(
        <App />,  							/* component의 형태 */ 
        document.getElementById('root') 	/* index.html의 태그의 id와 동일해야됨 */
    );
    ```

  * App.js  

    ```js
    import React from "react";
    
    /* 컴포넌트(component), 태그안에 집어넣을 값 입력 */
    function App() {
      return (
          <div>
          	Hello!!!
          </div>
      );
    }
    
    export default App;
    ```





### component?

>  HTML을 반환하는 함수

##### JSX

* javascript + HTML. 즉) 자바스크립트에 html 문법같이 쓴다 뭐 이런말인듯

* Component를 만들고 어떻게 사용하는지에 대한 것 - component는 대문자로 시작해야함 

* 재사용 가능한 component를 할 수 있음

* html의 id처럼 property의 name을 줄 수 있어

* react masic에서 react는 우리가 전달한 props를 argument로 가져가는 일을 함

  

##### 주의점

* React Application은 한번에 하나의 component만 rendering할 수 있다!!

  * index.js에는 하나의 컴포넌트가 와야되는데 여러개의 컴포넌트를 집어 넣고 싶다면 app.js컴포넌트에 다른 컴포넌트를 추가해서 가져와야한다.

  ```js
  //app.js
  import React from "react";
  import Potato from './Potato';		//다른 컴포넌트를 app.js에 import시킨다.
  
  function App() {
    return <div>
      <h1>Hello!!!</h1>
      <Potato />
    </div>
  }
  
  export default App;
  
  //index.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';			//하나의 component만 가져온다.
  
  
  ReactDOM.render(
      <App />,
      document.getElementById('root')
  );
  ```




##### props

* 객체같은 의미인데 좀 더 자유럽게 사용할 수 있음

* 나중에 데이터를 List로 가져오거나 할 때 사용함

*  자바스크립트 문법인 map함수를 사용하여 동적으로 원하는 데이터 수를 사용가능

  ```js
  function App() {
    return <div>
      {foodILike.map(dish => (			//map을 통해 모든 데이터 출력
        <Food
          key={dish.id}
          name={dish.name}
          rating={dish.rating}
        />
      ))}
    </div>
  }
  ```

  

##### propTypes

* propTypes를 통해서 props의 type과 required(필수적으로 필요함을 의미) 체크할거임

  ```js
  npm i prop-types //npm설치
  
  Food.propTypes = {
    name: PropTypes.string.isRequired,   //isRequired는 꼭 필요한 것을 의미한다.
    rating: PropTypes.number.isRequired
}
  ```
  ```



### Component Class (extends React Componet)

##### state

* 컴퍼넌트 클래스

  * React.Component에서 상속

  * render method

    * react는 자동적으로 class component의 render method를 실행한다.

    * retruen

      ```js
      import React from "react";
      import PropTypes from "prop-types";
      
      class App extends React.Component{
        render(){
          return <h1>Im a class Component</h1>
        }
      }
      
      export default App;
      ```

  * 왜 class component를 가져오는 걸까? function component는 쉬웠는데...

    * class component를 사용하면 **state**를 사용할 수 있으니까

* state는 object이고 component는 data를 넣을 공간이야

  * componet의 data를 바꿀 수 있는 작업을 할 수 있어

  ```js
  class App extends React.Component {
    state = {
      count: 0
    };
    render() {
      return (<h1>The number is :  {this.state.count}</h1>)
    }
  }
  ```

  

##### component life cycle method

* react가  componet를 생성하는 그리고 없애는 방법

* component죽을때 

  * 페이지가 바뀔때
  * state를 통해 component교체할 때

* Mounting

  * render 전에 호출 되는 function
    * ``constructor()`` : javascript에서 class를 만들 때 호출되는 거(react가 아니야)
    * ``static getDerivedStateFromProps()`` : 
  * ``render()``
  * render 후에 호출되는 function
    * ``componentDidMount()`` 

* Updating

  > add나 minus 버튼을 클릭해서 state를 변경할 때 그게 업데이트임

  * `` static getDerivedStateFromProps()`` 
  * ``shouldComponentUpdate()``
  * ``render()``
  * ``getSnapshotBeforeUpdate()``
  * ``componentDidUpdate()`` : 메소드 호출하고 업데이트가 완료되었다고 말하면서 실행되는 메소드



### axios

> fetch  위에 있는 작은 layer

```bash
npm install axios
```

* axios.get을 사용해서 가져오지만 완료되기까지는 시간이 좀 필요해서 비동기 처리를 한다.

  ```js
  //비동기 async, await
  //함수 내부에서 비동기로 axios를 기다리게 해
  
  getMovies = async () => {
      const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    };
    
  componentDidMount() {
      this.getMovies();
    }
  ```




### gh-pages

> 나의 웹사이트를 github의 github page 도메인에 나타나게 해주는 것 - 즉, 무료 웹사이트를 제공 (static 웹사이트, HTML/CSS/JavaScript로 이루어진 웹사이트)

* github계정 소문자

* repository로 소문자

  ```bash
  npm istall gh-pages
  
  
  /*scripts에 추가 - package.json*/
  "deploy":"gh-pages"
  
  /*마지막 줄에 추가 - package.json*/
  "homepage": "https://kyun9.github.io/ReactJS-movie_app"
  
  //build 폴더를 얻을 수 있음
  npm run build
  
  /* 빌드 폴더를 gh-pages에 업로드 - package.json */
   "deploy":"gh-pages -d build"
   
  /**/
  ```

  ```json
  "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build", // 1. build 폴더 얻기
      "deploy":"gh-pages -d build",  // 2. build 폴더에 upload하기
      "predeploy": "npm run build" //deploy를 실행하면 자동적으로 실행돼
    },
  ```



### react-router-dom

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;

/*
'/'나 '/home', '/home/introduce'를 하면 모든 컴포넌트가 렌더링 된다.
하지만 exact ={true}를 해주면 해당 url에만 데이터를 렌더링해준다.
*/
```

* HashRouter
  * /#/가 생긴다
* BrowerRouter
  * /#/가 없다

### Navigation Link

```js
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      {/* 
      <a href="/">Home</a>
      <a href="/about">About</a> 
      */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;

/*
a태그의 href는 html이다. 전체 페이지가 새로고침 되어 버려.. 리액트를 죽여
그 대신에
"react-router-dom"에서의 <Link to>를 사용한다.
단 link는 호출하는 곳 router안에 있어야한다. 
*/

//ex
<HashRouter>
  <Navigation />
  <Route path="/" exact={true} component={Home} />
  <Route path="/about" component={About} />
</HashRouter>
```











