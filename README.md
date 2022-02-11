# oasis-react-test

구현 내용

<ul>
    <li>Home</li>
    <li>Cart</li>
</ul>

<br />

### 🔨 구현한 방법과 이유에 대한 간략한 내용

<ul>
    <li>axios로 처음 페이지를 렌딩할 때 useEffect로 명시된 API를 통해 앨범의 데이터를 받아 옵니다.</li>
    <li>Home에서 받아온 데이터를 map으로 id가 짝수인 경우만 나타내었습니다.</li>
    <li>앨범에 hover style을 이용해 text와 배경색을 어둡게 만들어 주었습니다.</li>
    <li>장바구니에 담길 아이템을 state로 만들어 주었습니다.</li>
    <li>Cart로 장바구니 아이템을 props로 내려주어 나타내었습니다.</li>
    <li>삭제 버튼을 이용해 장바구니의 아이템을 id로 찾아 filter를 이용해 지워줍니다.</li>
    <li>브라우저의 사이즈가 Cart에 담긴 아이템의 설명의 길이보다 많이 작아질 경우에 각 컴포넌트가 밀리므로, @media를 이용해 지정된 길이보다 화면이 작아지면 font-size를 줄여서 밀리는 경우를 보완하였습니다.</li>
    <li>기본 alert보다 뛰어난 UX를 가진 alert를 만들어, 일정 시간 이후에 사라지면서, X 버튼을 따로 사용할 수 있게 하였습니다.</li>
</ul>

### 📝 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

<ul>
    <li>앨범에 hover시 배경색을 변경하면서 원하는 text를 나타내는 기능</br />=> 평소에는 display: none으로 보이지 않는 div를 만들어 hover시에만 보이도록 만들었습니다.</li>
</ul>

### 🧑‍💻 자세한 실행 방법

<ul>
    <li>Cart버튼을 누르면 Cart 페이지로 갑니다.</li>
    <li>Header버튼을 누르면 Home으로 돌아갑니다.</li>
    <li>Cart 페이지에 들어 있는 아이템이 없으면 비어있다는 text를 보여줍니다.</li>
    <li>Home에서 앨범에 마우스를 올리면 배경이 진해짐과 함께 클릭 시 장바구니에 추가 할 수 있다는 text를 보여줍니다.</li>
    <li>장바구니에 아이템을 담으면 추가되었다는 alert를 보여줍니다.</li>
    <li>중복된 아이템을 누르면 중복된 아이템이라는 alert를 보여줍니다. 장바구니에 아이템은 담기지 않습니다.</li>
    <li>alert는 일정 시간 이후 사라지며, backdrop이나 X 버튼을 눌러도 사라집니다.</li>
    <li>장바구니에 담긴 아이템을 클릭하면 아이템의 id를 보여줍니다.</li>
    <li>장바구니에 담긴 아이템의 삭제 버튼을 클릭하면 해당 아이템을 장바구니에서 삭제합니다.</li>
</ul>
